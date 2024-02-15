import React from 'react'
import Navbar from './components/Navbar'
import "./App.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Shop from './pages/shop';
import Cart from './pages/cart';


function App() {
  return (
   
    <>        
      <Router>
        <Navbar/>
        
        {/* <div className='h-[500px] w-[200px]'></div> */}
        <Routes>
          <Route path='/' element= {<Shop/>}/>
          <Route path='/cart' element= {<Cart/>}/>
          
            
        </Routes>
      </Router>
      
    </>
  )
}

export default App