import {useContext, useState} from 'react'
import {UserContext} from "./context.js"
import heart from "../assets/heart.jpg"
import shop from "../assets/shop.jpg"
import logo from "../assets/logo.jpg"
import login from "../assets/login.jpg"
import search from "../assets/search.jpg"
import { Link, Navigate, useNavigate,  } from 'react-router-dom'
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navbar() {
    const {wishListItem,cartItem,searchlist,setSearchList}=useContext(UserContext)
    console.log("searchitem  ",searchlist)

    const [navhide,setNavHide]=useState(false)

    const navigate=useNavigate()
    return (
        
        <nav className=' sticky z-40 top-0 justify-between bg-white flex items-center  px-3 h-16 shadow'>
        <div className=' '>
        <Link to="/"><img   className='w-30   hover:cursor-pointer ' src={logo} alt="" /></Link>
        </div>

        <div >
            <ul className='flex  gap-x-10  ' >
                <li className='hover:text-yellow-600'><Link to={"/card/rings"}>Rings</Link></li>
                <li className='hover:text-yellow-600'> <Link to={"/card/necklace"}>Necklaces</Link></li>
                <li className='hover:text-yellow-600'><Link to={"/card/bracelet"}>Bracelates</Link></li>
                <li className='hover:text-yellow-600'><Link to={"/card/earring"}>Earrings</Link></li>
                  <li className='hover:text-yellow-600'><Link to={"/card/bangles"}>Bangles</Link></li>
            </ul>
        </div>


  
     {/* <img  className=' flex absolute right-92 w-7 ' src="https://img.icons8.com/?size=50&id=132&format=png" alt=""/> */}
     <div className='border-l-1 border-l-gray-400 flex mr-5 gap-x-4 '>
        <form className='flex items-center ml-2' onSubmit={(e)=>{
            e.preventDefault()
            navigate("/searchpage")
            }}>
            {
            navhide &&
            <input className='border rounded-sm p-1 w-40 h-8 '  type="text"  placeholder='Search...' value={searchlist} onChange={(e)=>{
            setSearchList(e.target.value)
            }}/>}
            <button type='submit' className=' ml-2' onClick={()=>{ navhide?setNavHide(false):setNavHide(true);}}><img  className=' cursor-pointer '  src={search} alt="" /></button>
        </form>
     {/* <img  className=' cursor-pointer h-6 '  src={search} alt="" /> */}
     <Link to= {"/wishlist"}> 
      <img className='cursor-pointer mt-1 ' src={heart} alt="" />
      {wishListItem.length>0 &&
      (<p className='absolute top-4 right-19 text-white  bg-red-600  w-4 pb-4 pl-1 h-3   text-xs rounded-2xl '> 
      {wishListItem.length}
      </p>
      )
    } </Link>
    
    
     <Link to= {"/cart"}> 
     <img className='cursor-pointer mt-1  ' src={shop} alt="" />
     {cartItem.length>0 &&
    ( <p className='absolute top-4 right-10 text-white  bg-red-600  w-4 pb-4 pl-1 h-3   text-xs rounded-2xl'>
        {cartItem.length}
        </p>
        )}  </Link>
     
     
     
      <div className='flex'>
        {/* <SignedOut>
            <SignInButton  mode='modal'>
               <img  className=' cursor-pointer h-5 ' src={login} />
            </SignInButton   >

        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn> */}
      </div>
     
     </div>
     </nav>

    );
}
export default Navbar;