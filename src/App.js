import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import LogIn from './Components/LogIn';
import Contact from './Components/Contact';
import Home from './Components/Home';
import CatagorySave from './Components/CatagorySave';
import BrandSave from './Components/BrandSave';
import ProductSave from './Components/ProductSave';

function App() {
  return (
    <>
<BrowserRouter>
<Header />
  <Routes>
    <Route path="/login" element={<LogIn />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/" element={<Home />}/>
    <Route path="/catagorySave" element={<CatagorySave/>}/>
    <Route path="/brandSave" element={<BrandSave />}/>
    <Route path="/productSave" element={<ProductSave />}/>

  </Routes>
  <Footer/>
</BrowserRouter>    </>
  );
}

export default App;
