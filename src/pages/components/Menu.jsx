import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Menu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const menuRef = useRef(null);
  const dropdownRefs = useRef({});

  // Определяем мобильное устройство и закрываем меню при ресайзе
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
        setOpenDropdownId(null); // Закрываем меню при переходе на десктоп
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
        setOpenDropdownId(null);
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
    if (isOpen) {
      setOpenDropdownId(null);
    }
  };

  const toggleDropdown = (id, event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleMenuItemClick = (link) => {
    setIsOpen(false);
    setOpenDropdownId(null);
    console.log(`Переход к: ${link}`);
  };

  const menuItems = [
    { id: 1, label: 'Главная', link: '/' },
    { id: 2, label: 'О сайте', link: '/about' },
    { id: 3, label: 'О болезни', link: '/disease-info', subItems: [
        { id: 31, label: 'Немного о патогенезе', link: '/disease-info/what-is-hcm' },
        { id: 32, label: 'Генетика', link: '/disease-info/genetics' },
        { id: 33, label: 'Симптомы', link: '/disease-info/symptoms' },
        { id: 34, label: 'Диагностика', link: '/disease-info/diagnosis' },
        { id: 35, label: 'Течение болезни', link: '/disease-info/clinical-course' },
      ], },
    { id: 4, label: 'Жизнь с ГКМП', link: '/life', subItems: [
        { id: 41, label: 'Принципы лечения', link: '/life/treatment' },
        { id: 42, label: 'Терапия', link: '/life/medication' },
        { id: 43, label: 'Операции', link: '/life/surgery' },
        { id: 44, label: 'Имплантируемые устройства', link: '/life/devices' },
        { id: 45, label: 'Истории пациентов', link: '/life/history' },
      ], },
    { id: 5, label: 'Проекты', link: '/projects', subItems: [
        { id: 51, label: 'Дорожная карта', link: '/projects/map' },
        { id: 52, label: 'Регистр пациентов', link: '/projects/registr' },
        { id: 53, label: 'Тест', link: '/projects/test' },
      ], },
  ];

  const handleSubItemClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
    setOpenDropdownId(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);



  return (
    <nav className="navbar" ref={menuRef}>
      <div className="nav-container">
        {/* Логотип */}
        <div className="nav-logo">
          <Link to="/">ГКМП</Link>
          <br></br>
          Информация для пациентов с гипертрофической кардиомиопатией
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
            <li
              key={item.id}
              className={`nav-item ${item.subItems ? 'has-dropdown' : ''} ${
                openDropdownId === item.id ? 'dropdown-open' : ''
              }`}
              onMouseEnter={() => !isMobile && item.subItems && setOpenDropdownId(item.id)}
              onMouseLeave={() => !isMobile && setOpenDropdownId(null)}
            >
              {item.subItems ? (
                <>
                  <button
                    className="nav-link dropdown-toggle"
                    onClick={(e) => isMobile && toggleDropdown(item.id, e)}
                    aria-expanded={openDropdownId === item.id}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <span className="dropdown-arrow">
                      {openDropdownId === item.id ? '▲' : '▼'}
                    </span>
                  </button>
                  <ul
                    className={`dropdown-menu ${openDropdownId === item.id ? 'show' : ''}`}
                    ref={(el) => (dropdownRefs.current[item.id] = el)}
                  >
                    <li>
                      <Link
                        to={item.link}
                        className="dropdown-item main-item"
                        onClick={() => handleMenuItemClick(item.link)}
                      >
                        {item.label}
                      </Link>
                    </li>
                    {item.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        <Link
                          to={subItem.link}
                          className="dropdown-item"
                          onClick={handleSubItemClick}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={item.link}
                  className="nav-link"
                  onClick={() => handleMenuItemClick(item.link)}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HamburgerMenu;