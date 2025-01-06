import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import MenuPage from './pages/MenuPage';
import LocationsPage from './pages/LocationsPage';

library.add(fab);


const App = () => (
  <Router basename={`${process.env.PUBLIC_URL}`}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/locations" element={<LocationsPage />} />
    </Routes>
  </Router>
);

export default App;


