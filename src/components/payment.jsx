import React, { useContext } from 'react'
import { UserContext } from './context'
import { useNavigate } from 'react-router-dom'

function payment() {
     const{ShippingAddress,setShippingAddress}=useContext(UserContext)
     const navigate=useNavigate()
  return (
    <div>
        <div className='flex justify-center items-center mr-14 h-20'>
            <hr className='w-10 text-yellow-600  '></hr>
            <p className='text-8xl text-yellow-600  pb-18'>. </p>
            <p className='w-17 pb-11 text-yellow-600  font-bold mt-11  pl-1 text-sm'>checkout</p>
            <hr className='w-10 text-yellow-600  '></hr>
            <p className='text-8xl text-yellow-600  pb-18'>. </p>
            <p className='w-17 text-yellow-600  font-bold   pl-1 text-sm'>payment</p>
            <hr className='w-10 '></hr>
            <p className='text-8xl  pb-18'>. </p>
            <p className='w-17  font-bold pl-2 text-sm'>orderedplaced</p>
        </div>
                  <div className="flex flex-col items-center mt-10">
               
                <form onSubmit={(e)=>{
                       
                        navigate("/OrderedPlaced")
                       
                    }}>
                <div className="  shadow-lg shadow-gray-500 w-[50vw] flex p-5 ml-20 justify-between rounded-xl mb-5">

                    <div className="w-[170vw]  p-5 flex flex-col items-center  ">
                    <p className="text-4xl mb-3 text-yellow-600 ml-12 ">Payment Method</p>
                    <p className=' ml-12'>All transactions are secure and encrypted.</p>
                        <div className=" mt-5 flex flex-col w-[80%] ml-20 items-center ">
                            <div className="border border-gray-300 p-5 w-[140%] flex gap-2 rounded-t-2xl items-center justify-between">
                                <input  type="radio" name="payment" required/>
                                <label htmlFor="">Cash On Delivery</label>
                                <img className="w-10" src="https://cdn.iconscout.com/icon/free/png-256/free-cash-on-delivery-icon-download-in-svg-png-gif-file-formats--payment-hand-food-services-pack-icons-1569374.png" alt="cashonedelivery" />

                            </div>
                            <div className="border border-gray-300 p-5 w-[140%] flex gap-2 items-center justify-between">
                                <input type="radio" name="payment" />
                                <label htmlFor="">Online Banking</label>
                                <img className="w-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5ZT_94d9ZrYMaqT-sUqDpVcsN9pciTfz7g&s" alt="cashonedelivery" />

                            </div>
                            <div className="border border-gray-300 p-5 w-[140%] flex gap-2  items-center justify-between">
                                <input type="radio" name="payment" />
                                <label htmlFor="">Credit/Debit card</label>
                                <img className="w-10 " src="https://cdn0.iconfinder.com/data/icons/major-credit-cards-colored/48/JD-15-512.png" alt="cashonedelivery" />

                            </div>
                            <div className="border border-gray-300 p-5 w-[140%] flex rounded-b-2xl items-center justify-between">
                                <input type="radio" name="payment" />
                                <label className="-ml-8" htmlFor="">UPI App</label>
                                <img className="w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtj1QNHzC6AVkGEEf1UoX2yVRkhM3w9nsA5w&s" alt="cashonedelivery" />
                            </div>
                        </div>
                        <div className="h-[48%] border  border-gray-300 w-[110%] ml-17 rounded-2xl mt-9 flex flex-col items-center">
                            <p className="text-2xl mt-5 font-bold text-yellow-600">Billing Address</p>
                            <hr className="w-[40%] justify-self-center text-gray-400" />
                            <div className="text-2xl flex flex-col self-start  ml-10 mt-5 opacity-60">
                                <p>{ShippingAddress?.FirstName}</p>
                                <p>{ShippingAddress?.LastName}</p>
                                <p>{ShippingAddress?.StreetAddress}</p>
                                <p>{ShippingAddress?.State}</p>
                                <p>{ShippingAddress?.City}</p>
                                <p>{ShippingAddress?.Pincode}</p>
                                <p>{ShippingAddress?.Email}</p>
                                <p>{ShippingAddress?.PhoneNumber}</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[48%] rounded-lg flex flex-col justify-between">
                        {/* <div className="h-[48%] border border-gray-300 rounded-lg">
                            <div className="flex justify-between px-10 mt-5">
                                <p className="text-2xl font-bold">Total</p>
                                <p className="text-2xl flex items-center"><img className="h-6 " src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>2357890</p>
                            </div>
                            <hr className="w-[80%] justify-self-center text-gray-400" />
                            <div className="flex justify-between px-10 mt-5 opacity-60">
                                <p className="text-2xl">Items</p>
                                <p className="text-2xl"> 5</p>
                            </div>
                            <div className="flex justify-between px-10 mt-5 opacity-60">
                                <p className="text-2xl">Discount</p>
                                <p className="text-2xl text-red-600 flex items-center"><img className="h-6 " src="https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"/>-50000</p>
                            </div>
                            <div className="flex justify-between px-10 mt-5 opacity-60">
                                <p className="text-2xl">Shipping Cost</p>
                                <p className="text-2xl text-green-500">Free</p>
                            </div>
                        </div> */}

                       

                    </div>
                </div>
                <div className="w-[60vw] flex justify-center mb-10" >
                    <button type="submit" className=" self-end w-[40%] mr-2 bg-yellow-600 text-white p-2  rounded-md hover:text-yellow-600 hover:bg-white hover:scale-105 hover:border duration-300">Place Order</button>
                </div>
                </form> 
            </div>

    </div>
  )
}

export default payment
