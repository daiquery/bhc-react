import sliders from '../../assets/img/two-sliders.jpg';
import volcano from '../../assets/img/volcano.jpg';
import tenders from '../../assets/img/tenders.jpg';
import cheesesticks from '../../assets/img/cheesticks.jpg';


const AboutUs = () => (
    <section id="about" className="mb-5">
      <h2>About Us</h2>
      <p>
        Burney's Hot Chicken is proud to bring the authentic taste of
        Nashville-style hot chicken to Honolulu. Enjoy our spicy chicken
        sandwiches, chicken tenders, mozzarella cheesesticks and more made to
        order for pickup or delivery in the 96826 area. Order online now for
        your next meal!
      </p>
      <div className="stand-images">
        <img
          src={sliders}
          className="d-block"
          alt="Burney's Hot Chicken Sliders"
        />
        <img
          src={volcano}
          className="d-block"
          alt="Burney's Hot Chicken Volcano"
        />
        <img
          src={tenders}
          className="d-block"
          alt="Burney's Hot Chicken Tenders"
        />
        <img
          src={cheesesticks}
          className="d-block"
          alt="Burney's Hot Chicken Cheesesticks"
        />
      </div>
      <div className="order-now-container">
        <a href="https://orders.burneyshotchicken.com/">
          <button className="order-now-button" target="_blank" rel="noopener noreferrer">
            Order Now
          </button>
        </a>
      </div>
    </section>
  );
  
  export default AboutUs;
  