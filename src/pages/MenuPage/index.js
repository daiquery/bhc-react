import './styles.css'

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuSection from "../../components/MenuSection";
import SocialMedia from "../../components/SocialMedia";
import { specials, combos, alaCarte, desserts, beverages } from '../../menuData';

const MenuPage = () => (
  <>
    <Header />
    <main className="container py-5">
      <h1 className="text-center mb-4">Menu</h1>
      <MenuSection title="Specials" items={specials} />
      <MenuSection title="Combos" subtitle="Includes a side and a drink" items={combos} />
      <MenuSection title="Ala Carte" items={alaCarte} />
      <MenuSection title="Desserts" items={desserts} />
      <MenuSection title="Beverages" items={beverages} />
      <SocialMedia />
    </main>
    <Footer />
  </>
);

export default MenuPage;