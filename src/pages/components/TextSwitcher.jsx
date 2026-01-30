import React, { useState } from 'react';
import '../../styles/TextSwitcher.css';

const TextSwitcher = ({data, showImage = true,}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  
  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % data.length);
  };
  
  const shouldShowImage = showImage && activeItem?.imageUrl && 
                        !imageError;

  
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoaded(false);
    setImageError(true);
    console.error('Failed to load image:', activeItem?.imageUrl);
  };

  return (
    <div className="text-switcher">
      <div className="buttons-container">
        {data.map((item, index) => (
          <button
            key={item.id || index}
            className={`switch-button ${activeIndex === index ? 'active' : ''}`}
            onClick={() => {setActiveIndex(index); 
                setImageLoaded(false);
                setImageError(false);}}
            title={item.category ? `Категория: ${item.category}` : ''}
          >
            {item.title || `Текст ${index + 1}`}
          </button>
        ))}
      </div>
      
      <div className="content-container">
        <div className="text-display">
          <div className="text-header">
            <h2>{data[activeIndex].title || `Текст ${activeIndex + 1}`}</h2>
            {data[activeIndex].category && (
              <span className="text-category">{data[activeIndex].category}</span>
            )}
          </div>
          <img src={data[activeIndex].img} alt="" 
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`content-image ${imageLoaded ? 'loaded' : 'loading'}`} 
          style={{ display: imageLoaded ? 'block' : 'none' }}></img>
          <p>{data[activeIndex].content}</p>
          {/* Навигационные кнопки */}
          <div className="navigation-buttons">
            <button onClick={handlePrev} className="nav-button">
              ← Предыдущий
            </button>
            <span className="current-position">
              {activeIndex + 1} / {data.length}
            </span>
            <button onClick={handleNext} className="nav-button">
              Следующий →
            </button>
          </div>
        </div>
    </div>
    </div>
  );
};

export default TextSwitcher;