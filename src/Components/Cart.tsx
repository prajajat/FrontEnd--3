import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from '../Store/CartSlice'

function Cart({}){ 
   const cart=useSelector((state)=>state.cart);
   const dispatch = useDispatch();
   console.log(cart);
 
return(<>
  
    <div className="bg-green-300">
     <div  > 
      <ul>
        {   
          cart.items.map((i)=>{
             if(i.id==-1)return
            return(
               <li key={i.id} className="border "> 
               <div>
                   {i.title}
                  <button className="bg-blue-300 rounded m-2" 
                  onClick={()=>{//increment(i.id);
                    // console.log(ncart); setNCart({type:'Increment',data:i})
                    dispatch(increment({id:i.id}));
                    }}
                    >+</button>
                   {i.quantity}
                   <button className="bg-blue-300 rounded m-2" 
                    onClick={()=>dispatch(decrement({id:i.id}))}
                   >-</button>
               </div>
               </li>
            )

          })
        }
        </ul>
         {/* {
         cart.length>0&&<>
           <span className="bg-yellow-300 rounded m-3">Total price : {totalPrice}</span> <span className="bg-yellow-300 rounded m-3">Total item{cart.length}</span>
         <button className="bg-blue-300 rounded m-3" onClick={()=>setCart([])}>clear cart</button>
         <button className="bg-blue-300 rounded m-3" onClick={()=>setPage(3)}>check out</button>
         </>
         }  */}
     </div>
    </div>
   </>
)
}
export default Cart;