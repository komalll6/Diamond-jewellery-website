import React from 'react'

import insta from '../assets/insta.jpg'

function Footer(){
    return( 
       <>
     
     <div className=' border-t-2 bg-stone-950 border-gray-200 pt-19 h-117'>
     <div >
             <h className='font-bold text-white pl-25 m-4 text-lg'>ABOUT US</h><br></br>
             <h className='text-white pl-25 m-4 text-xs font-thin'>Diamond Emporium is a family-run company</h><br></br>
             <h className='text-white pl-25 m-4 text-xs font-thin '>  and a leading exporter of high-quality</h><br></br>
             <h className='text-white pl-25 m-4 text-xs font-thin '>    polished diamonds and jewellery.</h>
                    <img  className=' pl-22 m-3' src={insta} alt=""/>
     </div>

                 <div className="relative left-130 bottom-48 cursor-pointer h-0  w-10"> 
                            <h className='font-bold text-white text-lg'>Shops</h>                         
                            <ul>
                             <li className=" hover:underline  pt-3 text-xs font-thin text-amber-50 hover:text-white hover:duration-100 cursor-pointer"><a href="/card/rings">Rings</a></li>
                             <li className=" hover:underline  pt-3 text-xs font-thin text-amber-50 hover:text-white hover:duration-100 cursor-pointer"><a href="/card/necklace">Necklaces</a></li>
                             <li className=" hover:underline  pt-3 text-xs font-thin text-amber-50 hover:text-white hover:duration-100 cursor-pointer"><a href="/card/bracelet">Bracelates</a></li>
                            <li className=" hover:underline  pt-3 text-xs font-thin text-amber-50 hover:text-white hover:duration-100 cursor-pointer"><a href="/card/earring">Earrings</a></li>
                            </ul>
                 </div>

                 <div className="relative left-205 bottom-48 cursor-pointer h-0 w-10">
                        <h className='font-bold text-lg text-white'>Company</h>
                         <ul>
                             <li className=" hover:underline  pt-3 text-xs font-thin text-amber-50 hover:text-white hover:duration-100 cursor-pointer">FAQ</li>
                             <li className=" hover:underline  pt-3 text-xs font-thin text-amber-50 hover:text-white hover:duration-100 cursor-pointer">Testimonial</li>
                             <li className=" hover:underline  pt-3 text-xs font-thin text-amber-50 hover:text-white hover:duration-100 cursor-pointer">Contact</li>
                             <li className=" hover:underline  pt-3 text-xs font-thin text-amber-50 hover:text-white hover:duration-100 cursor-pointer">About</li>
                         </ul>
                     </div>
                     <div className="relative left-280 bottom-48 cursor-pointer h-0 w-10">
                     <h className='font-bold text-lg  text-white'>BUYER</h>
                         <ul>

                             <li className=" hover:underline pt-3 text-xs font-thin text-amber-50 hover:text-white hover:duration-100 cursor-pointer"><a href='/shipping'> Shipping </a></li>
                             <li className=" hover:underline pt-3 text-xs font-thin text-amber-50 hover:text-white hover:duration-100 cursor-pointer"><a href='/returnpolicy'>Return</a></li>
                         </ul>  
                         </div >
                         {/* <div className='h-0 text-amber-50'>
                         <input className='border hover:cursor-pointer box-border rounded-sm p-1 left-240  w-70 relative bottom-20 cursor-pointer' type="text"  placeholder='Enter email...'/>
                         </div> */}
                         </div>
                        <hr className='text-gray-200 border-0.5 w-275 flex relative bottom-34 left-29'></hr>
                         <p className='flex  relative left-27 bottom-14 text-xs text-gray-200 w-90 h-0 font-thin'>© 2025 Diamond Emporium - All Rights Reserved.</p>
                         
                         <p className='flex relative left-250 bottom-14 text-xs hover:underline  text-gray-200 w-25 h-0 font-thin'><a href='/terms-of-services'>Terms of Service</a></p>
                         <p className='flex relative left-290 bottom-14 text-xs hover:underline  text-gray-200 font-thin w-25 h-0 '><a href='/privacy-policy'>Privacy Policy</a></p>
        </> 
    );
}
export default Footer;



