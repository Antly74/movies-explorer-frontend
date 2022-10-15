import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './Header.css';
import MenuButton from '../MenuButton/MenuButton';
import Popup from '../Popup/Popup';
import ProfileLink from '../ProfileLink/ProfileLink';
import LogoLink from '../LogoLink/LogoLink';
import MenuLink from '../MenuLink/MenuLink';

function isWindowWide() {
  return window.innerWidth > 768;
}

function Header() {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isWide, setIsWide] = useState(isWindowWide());

  const location = useLocation();

  useEffect(() => {
    function handleWindowResize() {
      setIsWide(isWindowWide());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
     if (isWide && menuIsOpen) {
      setMenuIsOpen(false);
     }
  }, [isWide, menuIsOpen]);

  useEffect(() => {
    setMenuIsOpen(false);
  }, [location])

  function handleMenuButtonClick(e) {
    setMenuIsOpen(!menuIsOpen);
  }

  function closeMenu() {
    setMenuIsOpen(false);
  }

  return (
    <header className={`header ${(location.pathname === '/') ? 'header_style_blue' : ''}`}>
      <LogoLink />
      {(location.pathname === '/') ?
        (
          <nav className="header__nav-root">
            <MenuLink to="/signup" text="Регистрация" linkStyle="root" />
            <MenuLink to="/signin" text="Войти" linkStyle="root" highlighted />
          </nav>
        ) :
        (
          isWide ?
            (<nav className="header__nav-movies_style_horizontal">
              <MenuLink to="/movies" text="Фильмы" linkStyle="horizontal" />
              <MenuLink to="/saved-movies" text="Сохранённые фильмы" linkStyle="horizontal" />
              <ProfileLink linkStyle="horizontal"/>
            </nav>)
            : (<MenuButton onClick={handleMenuButtonClick}/>)
        )
      }
      <Popup isOpen={menuIsOpen} onClose={closeMenu} name="menu">
        <nav className="header__nav-movies_style_vertical">
          <MenuLink to="/" text="Главная" linkStyle="vertical" />
          <MenuLink to="/movies" text="Фильмы" linkStyle="vertical" />
          <MenuLink to="/saved-movies" text="Сохранённые фильмы" linkStyle="vertical" />
          <ProfileLink linkStyle="vertical"/>
        </nav>
      </Popup>
    </header>
  );
}

export default Header;
