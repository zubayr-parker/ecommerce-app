import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Books from "./pages/Books";
import {books} from "./data"
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { React, useEffect, useState } from "react";


function App() {
  const [cart,setCart] = useState([])

  function addToCart(book){
    setCart([...cart, book])
  }



  useEffect (()=>{
    console.log(cart)
  }, 
  [cart])


  return (
    <Router>

    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books books={books}/>}/>
        <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} />}/>
        <Route path="/cart" element={<Cart books={books} cart={cart}/>}/>



      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App;
