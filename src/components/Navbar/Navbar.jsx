import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes,
  FaHome,
  FaDiceD20,
  FaBookDead,
  FaGhost,
  FaUserNinja,
  FaSignInAlt,
  FaUserPlus,
  FaChevronDown
} from 'react-icons/fa';
import { GiSpellBook } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navbarRef = useRef(null);
  const location = useLocation();

  // Fechar submenus ao mudar de rota
  useEffect(() => {
    setActiveSubmenu(null);
    setIsMobileMenuOpen(false);
  }, [location]);

  // Efeito de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const navItems = [
    {
      path: '/',
      icon: <FaHome />,
      text: 'Início'
    },
    {
      path: '/campanhas',
      icon: <FaDiceD20 />,
      text: 'Campanhas',
      submenu: [
        { path: '/campanhas/ativas', text: 'Ativas' },
        { path: '/campanhas/arquivadas', text: 'Arquivadas' },
        { path: '/campanhas/criar', text: 'Criar Nova' }
      ]
    },
    {
      path: '/grimorio',
      icon: <GiSpellBook />,
      text: 'Grimório'
    },
    {
      path: '/enigmas',
      icon: <FaBookDead />,
      text: 'Enigmas'
    },
    {
      path: '/entidades',
      icon: <FaGhost />,
      text: 'Entidades'
    }
  ];

  return (
    <nav 
      ref={navbarRef}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        {/* Logo com efeito paranormal */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="navbar-logo">
            <FaGhost className="logo-icon" />
            <span className="logo-text">ECO DA REALIDADE</span>
          </Link>
        </motion.div>

        {/* Menu Mobile */}
        <motion.div
          className="mobile-menu-icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.div>

        {/* Menu Principal */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className={`navbar-item ${item.submenu ? 'has-submenu' : ''}`}
              onMouseEnter={() => !isMobileMenuOpen && item.submenu && setActiveSubmenu(index)}
              onMouseLeave={() => !isMobileMenuOpen && item.submenu && setActiveSubmenu(null)}
            >
              <NavLink 
                to={item.path} 
                className="navbar-link"
                onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.text}</span>
                {item.submenu && (
                  <FaChevronDown className={`submenu-arrow ${activeSubmenu === index ? 'open' : ''}`} />
                )}
              </NavLink>

              {/* Submenu */}
              {item.submenu && (
                <AnimatePresence>
                  {(activeSubmenu === index || isMobileMenuOpen) && (
                    <motion.ul 
                      className="navbar-submenu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink 
                            to={subItem.path} 
                            className="submenu-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.text}
                          </NavLink>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}

          {/* Botões de Auth */}
          <div className="navbar-auth">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to="/login" 
                className="auth-link login"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaSignInAlt />
                <span>Entrar</span>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to="/register" 
                className="auth-link register"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaUserPlus />
                <span>Criar Conta</span>
              </Link>
            </motion.div>
          </div>
        </ul>
      </div>
    </nav>
  );
}