import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/img/bhc-logo.png';

const Header = () => {
  const location = useLocation();

  const aboutLink =
    location.pathname === '/' ? '#about' : '/#about';

  return (
    <header>
      <div className="contact-info py-3">
        <p>
          <a
            href="https://www.google.com/maps?q=2105+S.+King+St,+Honolulu,+HI+96826"
            target="_blank"
            rel="noopener noreferrer"
          >
            2105 S. King St, Honolulu, HI 96826
          </a>
        </p>
        <p>
          Phone: <a href="tel:+18084997915">(808) 499-7915</a>
        </p>
        <p>Weekday Hours: Tues-Thurs 11:30am - 8:30pm</p>
        <p>Weekend Hours: Friday &amp; Saturday 11:30am - 12am</p>
      </div>
      <Navbar expand="lg" sticky="top" className="navbar">
        <Container fluid>
          <Navbar.Brand href="/" className="logo">
            <img width="60%" src={logo} alt="Burney's Hot Chicken" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href={aboutLink}>About</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/locations">Locations</Nav.Link>
              <Nav.Link
                href="https://orders.burneyshotchicken.com/"
                target="_blank"
                className="order-now"
              >
                Order Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
