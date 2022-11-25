import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import CounterContainer from './components/counter';
import Shop from './components/shop/products';
import ProductDetails from './components/shop/details';
import Home from './components/home';
import Cart from './components/shop/cart';
import About from './components/about';
import Projects from './components/projects';
import NotFound from './components/notFound';
import Navbar from './components/navbar';
import AuthForm from './components/shop/auth-form';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"



function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/projects' element={ <Projects/>}/>
          <Route path='/counter' element={ <CounterContainer/>}/>
          <Route path='/shop' element={ <Shop/>}/>
          <Route path='/product-details/:id' element={ <ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/register' element={<AuthForm/>} />
          <Route path='/login' element={<AuthForm/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
