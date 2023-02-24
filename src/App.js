import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import {productData, productDataTwo} from "./components/Products/Data";
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Hero/>
      <Products heading="Choose your favorite" data={productData}/>
      <Feature/>
      <Products heading='"Grab your Cupcakes now!" - edp445' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;
