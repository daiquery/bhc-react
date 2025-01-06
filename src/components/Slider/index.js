import { Carousel, CarouselItem } from 'react-bootstrap';
import food1 from '../../assets/img/food1.jpg';
import food2 from '../../assets/img/food2.jpg';
import food3 from '../../assets/img/food3.jpg';



const Slider = () => (
  <div className="slider-container">
    <Carousel className="slider">
      <CarouselItem className="carousel-item active">
        <img
          src={food1}
          className="d-block w-100"
          alt="Nashville-style hot chicken sandwich"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src={food2}
          className="d-block w-100"
          alt="Spicy wings from Burney's Hot Chicken"
        />
      </CarouselItem>
      <CarouselItem>
        <img
          src={food3}
          className="d-block w-100"
          alt="Crispy chicken tenders from Burney's"
        />
      </CarouselItem>
    </Carousel>
  </div>
);

export default Slider;
