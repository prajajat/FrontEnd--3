import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom"
import { addToCart } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

function Customize(){
    const { data } = useOutletContext();
     const navigator=useNavigate()
     const dispatch=useDispatch();
     console.log(data);
     const inputRef=useRef('');
    return (
        <div className="bg-black fixed top-15 left-10 right-10 size-110 rounded bg-black/30 backdrop-blur-sm">
            <div className="size-90 bg-white rounded m-5 ml-10" >
            <button  className ='p-2 rounded text-gray-700'onClick={()=>navigator(-1)}> Go Back</button>
            <input type="text" className="bg-gray-200 w-[5]" onChange={(e)=>inputRef.current=e.target.value} placeholder="Enter customization"/>
             <button className='bg-blue-200 p-2 m-2' 
              onClick={()=>
              {
                dispatch(addToCart({id:data.id,price:data.price,customization:inputRef.current,title:data.title}));
                navigator('/shop/cart') ;
               }
            }
              >add to cart</button>
         </div>
        </div>
    )
}
export default Customize