import React from 'react'
import { Link,  } from 'react-router-dom'
import plus from '../assets/plus.jpg'

import {useContext} from 'react'
import {UserContext} from "./context.js"



function cart() {

  const {cartItem,setCartItem,cartQuantity,setCartQuantity}=useContext(UserContext)

console.log("cartItem ",cartItem)

let totalItem=0;

cartItem?.map((item)=>{
  totalItem=totalItem+(item.quantity*item?.product.price);
})

function removeCartItem(data){
  setCartItem(cartItem.filter(item=> item.product.id!==data.product.id))
}

  return (
  <> <h className="text-4xl ml-140 mt-50 text-yellow-600 border-b-3 h-30 w-33 ">Shopping Cart</h>
    <div className='flex flex-col items-center'>
      {
        cartItem.length>0?
        cartItem?.map((item)=>
        item.quantity >0? 
          < div className='border-2 border-stone-200 w-280 h-54 rounded-3xl flex mb-5 items-center mt-5'>
              <img className='w-47 h-47 pl-4 ' src={item?.product?.image} alt="" />
                 <div className='w-150 h-45 pl-5 '>
                  
                   <p className='text-lg'>{item?.product?.title}</p>
                   <button onClick={()=>{
                  removeCartItem(item)
                  ||
                  setCartQuantity(0)
                   }} >
                  <img className='w-4 h-4 cursor-pointer relative justify-around left-218 bottom-8' src='https://cdn-icons-png.flaticon.com/128/1828/1828778.png' alt=''></img>
                  </button>
                  <div className='flex  gap-2'>
                   <p className='text-lg mt-1 font-bold'>₹{item?.quantity*item?.product?.price}</p>
                     <li className="flex items-center ">
                    <button className="  mr-1 " onClick={()=>{item.quantity-=1;setCartQuantity(item.quantity-1) }}><img className=' w-5 h-5 border-2 border-amber-400 p-0.5 rounded-sm ' src="https://cdn-icons-png.flaticon.com/128/10777/10777750.png"/></button> 
                    <p>{item?.quantity}</p>
                    <button className="   ml-1 " onClick={()=>{item.quantity+=1;setCartQuantity(item.quantity+1) }}><img className=' w-5 h-5 rounded-sm ' src={plus}/></button>
                    </li></div>
                  <p className='text-yellow-500  curser-pointer'> Free Delivery</p>
                   <br></br>
                
                
                </div>
                
              </div>
              
              :
              ""
            )
                
             :<div>
                  <img className='w-100 mt-1' src='https://www.giva.co/cdn/shop/t/95/assets/empty-cart.jpg?v=2867468997513044031699807510'/>
             <p className='text-xl ml-33'>Your cart is empty.</p>
               <p  className='text-xl text-yellow-600 ml-10 mt-2'>Let's fill it up with some amazing jewellery!</p>
             <Link to={'/card'}><button class=' hover:scale-105 duration-500 cursor-pointer p-1 border-2 border-b-1
                   border-yellow-600 text-yellow-600 text-2xl  w-55 mt-8 mb-5 ml-27 font-serif 
                    ' >Explore Now </button></Link> 
             </div>
              }
            {
            totalItem>0&&
            <div className=' text-lg'>
              <p className='text-3xl '>Order Summary</p>
       
               <p className='ml-4'>Estimated total:{totalItem}</p>
               <Link to={'/checkout'}><button className='bg-yellow-600 w-50 ml-1 mt-7 rounded-sm mb-10 p-2 shadow-lg hover:shadow-gray-400 '>Buy Now</button></Link>
  
              
          
          </div>
      }
        
         
    </div>
    
    </>
  )
}


export default cart



{/* <hr className='opecity-40' /> */}