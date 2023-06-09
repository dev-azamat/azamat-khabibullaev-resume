import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { links } from '../constants'
import { useColorMode } from '@chakra-ui/react'

function Header() {
  const [menu, setMenu] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  const { pathname } = useLocation()

  const openMenu = () => {
    setMenu(true)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  const handleTheme = () => {
    toggleColorMode()
  }

  const scrollToTop = () => {
    closeMenu()
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToTop()
  }, [pathname])

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="header__logo">
            <Link className="header__logo-link" to="/">
              Azamat
            </Link>
          </div>
          <div
            className={`${menu ? 'header__menu show-menu' : 'header__menu'}`}
          >
            <nav className="header__nav">
              <ul className="header__nav-list grid">
                {links.map((link) => (
                  <li className="header__nav-item" key={link.key}>
                    <NavLink
                      className="header__nav-link"
                      to={link.url}
                      onClick={scrollToTop}
                    >
                      {link.icon} {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              className="header__close-menu"
              type="button"
              onClick={closeMenu}
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          <div className="header__buttons">
            <button
              className="header__theme-change"
              type="button"
              onClick={handleTheme}
            >
              {colorMode === 'light' ? (
                <i className="ri-moon-line"></i>
              ) : (
                <i className="ri-sun-line"></i>
              )}
            </button>

            <button
              className="header__open-menu"
              type="button"
              onClick={openMenu}
            >
              <i className="ri-menu-4-line"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
