import React from 'react'
import Category from './category';
import banner from '../assets/banner.jpg'
import banner2 from '../assets/banner2.jpg'
import { Link,  } from 'react-router-dom'
function Items(){
    return(<>
         <div className=' flex  justify-end  items-end' >
             <img className='w-140 h-114 m-17 ' src={banner} alt="" />
         </div>
         <div className='flex flex-col relative left-25 bottom-115 w-200 h-0 gap-5'   >
            <p className='text-4xl w-150 '>
            Exquisite Diamond Jewelry for <br></br>Every Occasion
            </p>
            <p className=' w-150'>Discover a dazzling collection of fine diamond jewelry, crafted to <br></br>
            perfection. Whether it's an engagement ring, a wedding band, or a<br></br> 
            special gift for someone you love, our expertly designed pieces reflect<br></br> 
            elegance, sophistication, and timeless beauty. Each diamond is <br></br>
            meticulously sourced and set with precision to ensure the highest<br></br> 
            quality and lasting brilliance.</p>
           <Link to={'/card'}><button class=' hover:scale-105 duration-500  cursor-pointer p-1 h-12 border-1 border-b-1 border-yellow-600 text-yellow-600 text-2xl border-x-1 w-45 relative font-serif ...' >Shop now  </button></Link> 
         </div>
         <div>
         <img className=' h-95 w-400 mt-10 ' src={banner2} alt="" />
         <p className='flex relative h-0 w-140 left-150 bottom-80 text-amber-50 text-6xl'>Be The First To Get<br></br> Limited Editions</p>
         <Link to={'/card'}><button class=' hover:scale-105 duration-500 left-180 cursor-pointer p-1 border-1 border-b-1 border-yellow-600 text-yellow-600 text-2xl border-x-1  w-45 relative bottom-30 font-serif  ...' >Shop now  </button></Link> 
         </div>
        </>




//         <div className=' max-w-[100vw]'>
//           <div className=' bg-gray-800 flex flex-col object-fit items-center pb-22 '>
//             <h className=' text-cyan-50 pt-8 text-2xl border-b fot-bold'>Best Diamond That You Loved ♡</h>
//             <div class=' gap-x-16 cursor-pointer h-55 object-cover pt-6 flex justify-center flex-wrap '>
//                 <img className=' rounded-3xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDA2I4PgLzqP7r9_pTjDVU2AIHoUtkfBINMw&s"/>
//                 <img className=' rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCdVXsatKdAxulFKjfLnmvfkPT5dDbFLwLfg&s'/>
//                 <img className=' rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWl1930bglfbb9xruGtx2EL2ib9YodZEEtFg&s'/>
//                 <img className=' rounded-3xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLC8oIoMxOBNdVYgJH5NBemgZLMi_m00ffLIrwa8Ar4rlXDxnwZkRMYRXd1COagquIq0&usqp=CAU'/>
                
//             </div>
//          </div>
//          <Category/>
//          <div>
//          <img className='w-400 h-95 pt-10' src='https://cdn.shopify.com/s/files/1/1834/6621/collections/Solid-Gold-Jewellery_4201d48f-b8c7-4411-b770-571e31a0af8e.jpg?v=1700066201'  alt='' />
//          <h className='font-mono font-bold text-4xl flex relative bottom-70 left-130 text-white h-0 w-90'>From The Source</h>
//          <p className=" font-extralight text-2xl flex relative bottom-55 left-120 text-white h-0 max-w-100">Handcrafting the world's best diamonds starts with knowing where they come from.<br></br>
//             we proudly trace 100% of our rough diamonds to known mines and sources.</p> 
//         <p className=" cursor-pointer underline font-semibold text-2xl flex relative bottom-10 left-128 text-white w-90">Follow Your Diamond Journey</p>    
//         </div>
//          </div>
     );
 }
export default Items;

// <img className='cursor-pointer h-55 w-60 object-cover  pt-6 relative right-37' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDA2I4PgLzqP7r9_pTjDVU2AIHoUtkfBINMw&s"/>
//             <img className='cursor-pointer h-55 w-60 object-cover  pt-6 relative bottom-55 right-115' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZTipBI7brx2GFKCBP0D1qquRbhQDpHNKgq05VLJ5F7fzia74uwLh4fNBJzmvxCI7LaF0&usqp=CAU'/>
//             <img className='cursor-pointer h-55 w-60 object-cover  pt-6 relative bottom-110 left-40' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWl1930bglfbb9xruGtx2EL2ib9YodZEEtFg&s'/>
//             <img className='cursor-pointer h-55 w-60 object-cover  pt-6 relative bottom-165 left-115' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLC8oIoMxOBNdVYgJH5NBemgZLMi_m00ffLIrwa8Ar4rlXDxnwZkRMYRXd1COagquIq0&usqp=CAU'/>