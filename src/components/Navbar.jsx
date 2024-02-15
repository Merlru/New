import React from 'react'
import { IoMenu } from "react-icons/io5";
import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
function Navbar() {
  return (
    <>
    <div className="bg-custom-sgrey flex justify-between item-center max-24-[1240px] mx-auto px-4 " >
        <h1 className='w-full text-3xl font-bold p-3 '>ITECH SHOP.</h1>
        <ul className='flex bg-custom-sgrey'>
            <Link to="/">
            <li className='p-4'>Home</li>
            </Link>
            

            <li className='p-4'>Company</li>
            <li className='p-4'>Resourses</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div className='bg-custom-grey' >
          <Link to="/cart" >
            {/* <IoMenu /> */}
            <ShoppingCart size={40} className='pt-5'/>
          </Link>
           
          
           
        </div>
    </div>
    
        
    </>
  )
}

export default Navbar