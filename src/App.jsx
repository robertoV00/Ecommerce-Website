import React, { useEffect, useState } from 'react';
import Nav from "./components/Nav"
import { AppContext } from "./context/AppContext"
import axios from "axios"
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';

function App() {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  function addToCart(product, addedQuantity) {

    const checkProductInCart = cart.find((item) => item.id === product.id)

    if(checkProductInCart) {
      setCart(prevCart => prevCart.map(item => item.id === product.id ? {...item, quantity : item.quantity + addedQuantity} : item))
    } else {
      setCart((prevCart) => [...prevCart, {...product, quantity : addedQuantity}])
    }

  }

  function reduceCartQuantity(product) {
    setCart(prevCart => prevCart.map(item => (item.id === product.id && item.quantity > 1) ? {...item, quantity : item.quantity - 1} : item))
  }

  function removeFromCart(product) {
    setCart(prevCart => prevCart.filter(item => item.id !== product.id))
  }

  useEffect(() => {

  }, [cart])

    async function fetchProducts() {
        const {data} = await axios.get("https://ecommerce-samurai.up.railway.app/product");

        const productsData = data.data;

        setProducts(productsData);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

  return (
    <AppContext.Provider value={{ products, addToCart, cart, reduceCartQuantity, removeFromCart}}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />}/>
          <Route path='/products/:id' element={<ProductPage />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </AppContext.Provider>

  );
}

export default App;
