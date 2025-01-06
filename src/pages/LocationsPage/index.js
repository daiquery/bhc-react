import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LocationInfo from "../../components/LocationInfo";
import SocialMedia from "../../components/SocialMedia";


const LocationsPage = () => (
  <>
    <Header />
    <main className="container py-5">
      <h1 className="text-center mb-4">Locations</h1>
      <LocationInfo />
      <SocialMedia />
    </main>
    <Footer />
  </>
);

export default LocationsPage;
