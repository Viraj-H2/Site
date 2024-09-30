import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as Bnavbar, Button, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../contexts/ThemeContext';
import WarningModal from './WarningModal';

function openWin(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const w = window.open(url);
    if (!w) {
      reject();
    }
    setTimeout(() => {
      try {
        w?.document.location.href;
      } catch (e) {
        resolve();
        return;
      }
      w?.close();
      reject();
    }, 500);
  });
}

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { theme, setTheme } = useContext(ThemeContext);
  const [showWarning, setShowWarning] = useState(false);

  const themeOptions = [
    { value: 'light', icon: faSun, label: 'Light' },
    { value: 'dark', icon: faMoon, label: 'Dark' },
    { value: 'auto', icon: faCircleHalfStroke, label: 'Auto' },
  ];

  const handleContactClick = () => {
    openWin('mailto:contact@viraj-h2.com?subject=Demande%20de%20contact')
      .then(() => {})
      .catch(() => {
        setShowWarning(true);
      });
  };

  return (
    <>
      <Bnavbar {...(isHomePage ? { fixed: 'top' } : { sticky: 'top' })} expand='sm' bg='body'>
        <Container fluid>
          <Bnavbar.Brand as={Link} to='/'>
            <img src='/assets/icons/favicon.svg' style={{ maxHeight: '40px' }} alt='Logo' />
          </Bnavbar.Brand>
          <Bnavbar.Toggle />
          <Bnavbar.Collapse className='justify-content-end'>
            <Nav>
              <Nav.Link as={Link} to='/'>Accueil</Nav.Link>
              <Nav.Link as={Link} to='/concept'>Notre concept</Nav.Link>
              <Nav.Link as={Link} to='/team'>L'équipe</Nav.Link>
              <Nav.Link as={Link} to='/careers'>Carrières</Nav.Link>
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
              <NavDropdown key={theme}
                title={
                  <FontAwesomeIcon 
                    icon={themeOptions.find(option => option.value === theme)?.icon || faCircleHalfStroke}
                    color='nav-link-color'
                  />
                }
              >
                {themeOptions.map((option) => (
                  <NavDropdown.Item 
                    key={option.value} 
                    onClick={() => setTheme(option.value as 'light' | 'dark' | 'auto')}
                  >
                    <FontAwesomeIcon icon={option.icon} className='me-2' color='nav-link-color' />
                    {option.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Button onClick={handleContactClick} variant='outline-primary'>Nous contacter</Button>
            </Nav>
          </Bnavbar.Collapse>
        </Container>
      </Bnavbar>
      <WarningModal show={showWarning} handleClose={() => setShowWarning(false)} />
    </>
  );
}
