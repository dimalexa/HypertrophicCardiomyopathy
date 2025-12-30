import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Menu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);

  // Определяем мобильное устройство и закрываем меню при ресайзе
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Закрываем меню при переходе на десктоп
      }
    };

    // Проверяем при загрузке
    checkIsMobile();

    // Добавляем обработчик ресайза
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Закрываем меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: 1, label: 'Главная', link: '/' },
    { id: 2, label: 'О болезни', link: '/disease-info' },
    { id: 3, label: 'Лечение', link: '/treatment' },
    { id: 4, label: 'Правовые аспекты', link: '/legal-rights' },
    { id: 5, label: 'Калькулятор рисков', link: '/SCD-calculator' },
  ];

  const handleMenuItemClick = (link) => {
    setIsOpen(false);
    // Здесь можно добавить плавную прокрутку или навигацию
    console.log(`Переход к: ${link}`);
  };

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="nav-container">
        {/* Логотип */}
        <div className="nav-logo">
          <Link to="/">Гипертрофическая кардиомиопатия</Link>
        </div>

        {/* Гамбургер-иконка (только на мобильных) */}
        {isMobile && (
          <button 
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        )}

        {/* Меню */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''} ${!isMobile ? 'desktop' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link
                to={item.link}
                className="nav-link"
                onClick={() => handleMenuItemClick(item.link)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;