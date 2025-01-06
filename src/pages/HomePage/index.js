import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Slider from "../../components/Slider";
import SocialMedia from "../../components/SocialMedia";
import ThemeSong from "../../components/ThemeSong";


const HomePage = () => (
  <>
    <Header />
    <main className="container py-5">
      <div className="slider-content">
        <h2>Welcome to Burney's Hot Chicken - Pickup & Delivery</h2>
        <p>
          Experience the best Nashville-style hot chicken in Honolulu. Enjoy
          spicy, crispy chicken sandwiches, mozzarella cheesesticks, and more —
          available for pickup or delivery in Honolulu, HI 96826.
        </p>
      </div>
      <Slider />
      <AboutUs />
      <SocialMedia />
      <ThemeSong />
    </main>
    <Footer />
  </>
);

export default HomePage;
