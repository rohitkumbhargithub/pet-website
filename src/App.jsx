import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PetGromming from "./components/PetGromming";
import Products from "./pages/Products";
import PetCare from "./pages/PetCare";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import PetClinic from "./components/PetClinic";
import PetDaycare from "./components/PetDaycare";
import PetTranning from './components/PetTranning';

function App() {
  return (
    <>
    <Router>

    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="pet-care" element={<PetCare />} />
        <Route path="contact" element={<Contact />} />
        <Route path="categories" element={<Categories />}>
          <Route path="pet-gromming" element={<PetGromming />} />
          <Route path="pet-clinic" element={<PetClinic />} />
          <Route path="pet-daycare" element={<PetDaycare />} />
          <Route path="pet-traning" element={<PetTranning />} />
        </Route>

    </Routes>
    </Router>
    
    </>
  );
}

export default App;
