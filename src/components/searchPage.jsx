import { useContext, useState } from "react"
import { UserContext } from "./context"
import Datas from "../utils/datas"
import { Link } from "react-router-dom"
import redHeart from "../assets/heart.png"

function SearchPage(){

    const {cartItem,setCartItem,cartQuantity,setCartQuantity,wishListItem,setWishLisItem,searchlist,setSearchList}=useContext(UserContext)

    const [quantity,setQuantity]=useState(1)
     const [isHovered, setIsHovered] = useState(false);

    function addData(product){
        if(cartItem.length > 0){
            for(let i=0;i<cartItem.length;i++){
                if(cartItem[i].product.id===product.id){
                    cartItem[i].quantity+=1
                    return
                }
            }
            setCartItem([...cartItem, {product,quantity}])
        } 
        else{
            setCartItem([...cartItem, {product,quantity}]) 

        }
    }

    function wishlistheart(data){
        for(let i=0;i<wishListItem.length;i++){
            if(wishListItem[i]?.id===data.id){
                return redHeart
            }
        }
        return "https://cdn-icons-png.flaticon.com/128/535/535285.png"
    }

    function setDataInWishList(data){
        for(let i=0;i<wishListItem.length;i++){
            if(wishListItem[i]?.id===data.id)
            {
                setWishLisItem(wishListItem.filter(item=> item.id!==data.id))
                return
            }
        }
        setWishLisItem([...wishListItem,data])
    }


    function imagechange(data){
        if(data.id===isHovered){
            return data.imge;
        }
        return data.image;
    }

    const filter_datas=Datas.filter(data =>searchlist.length>0 ?data.title.toLowerCase().includes(searchlist.toLowerCase())  :data)
    return(
        <>
           <div className=' flex flex-col items-center cursor-pointer mt-14 mb-7'>
              <h1 className=' -mt-5 text-2xl border-b  font-bold text-zinc-950'>Our features Products </h1>
                <div className=' p-5 flex gap-5 justify-center flex-wrap   '>{ filter_datas.map((data)=>
                        <div className='h-106 w-75  flex-col rounded-lg mb-9 '>
            
            <button className=' flex relative items-center h-9 p-1.5 left-64 top-12  w-8 object-cover rounded-2xl text-3xl
            bg-white hover:scale-125 duration-300' onClick={()=>{
                setDataInWishList(data);
                console.log(wishListItem)
            }} > 
            <img className='w-6 cursor-pointer' src={wishlistheart(data)} alt="" /> 
            </button>
            <Link to={`/product/${data.id}`} >
            <div key={data.id} >
                
           
            <div  className='h-75  w-75  ' >
            
            <img
            
      src={imagechange(data)}
      alt="Product"
      className=" object-cover h-75  w-75 transition-all duration-300"
      onMouseEnter={() => setIsHovered(data.id)}
      onMouseLeave={() => setIsHovered(false)}
      
      
     /> </div>


            <div className=' flex flex-col items-start pt-2'>
            
            <p className=' text-yellow-600 text-xs font-serif w-58 truncate '> {data.title}</p>
            <p className=' font-bold font-sans mb-2'>₹{data.price}<p className='text-xs'>(MRP Inclusive of all taxes)</p></p>
            </div>
            
            </div>
            </Link>

            <button className=' bg-zinc-900 text-stone-50 text-lg hover:bg-yellow-600 rounded-lg cursor-pointer 
            w-75 h-11 font-serif ' 
            onClick={()=>{
                setQuantity(quantity+1)
                ||
                quantity > 0 && setCartQuantity(cartQuantity+quantity) || addData(data)
                ||
                console.log("cart ",cartItem)
            }}
            > Add to Cart</button>
        
            </div>
               )}
            </div>
             </div>
         </>
    );
}

export default SearchPage;