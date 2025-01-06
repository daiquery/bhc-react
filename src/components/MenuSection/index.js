import { Row, Col } from 'react-bootstrap';

const MenuSection = ({ title, subtitle, items }) => (
  <div className="menu-section">
    <h2>{title}</h2>
    {subtitle && <small>{subtitle}</small>}
    <Row>
      {items.map((item, index) => (
        <Col md={4} key={index}>
          <div className="menu-item">
            {item.image && <img src={item.image} alt={item.name} />}
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default MenuSection;
