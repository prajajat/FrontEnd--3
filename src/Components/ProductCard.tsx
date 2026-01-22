import { useDispatch } from "react-redux";
import { addToCart } from "../Store/CartSlice";

const ProductCard=({data})=>
{
     const dispatch = useDispatch();
  
 return (
   <div className="bg-gray-100 rounded-xl shadow-md p-5 border w-full max-w-sm max-auto">
    <div>
    <label>
       Product Name :
    </label>
      <div > {data.title}
         </div> 
    </div>
    <div>
    <label>
       Product category :
    </label>
       {data.category}
    </div>
    <div>
    <label>
       Price :
    </label>
       {data.price}
    </div>
    <div>
    <label>
       Product Stock :
    </label>
       {data.stock}
    </div>
    {data.stock==0&&<div>
      <span className="text-xs bg-red-100 px-2 py-1 rounded"> Out of Stock</span>
     
        </div>}
    {data.stock<=5 && data.stock>0&&<div>
        <span className="text-xs bg-yellow-100 px-2 py-1 rounded">Limited Quantity</span> 
        </div>}
    {data.price>=500&&<div>
        <span className="text-xs bg-purple-100 px-2 py-1 rounded"> Premium</span>
        </div>}
  <button className='bg-blue-200' 
  onClick={()=>
    dispatch(addToCart({id:data.id,price:data.price,customization:'',title:data.title}))}
  >add to cart</button>
   </div>
 )
};
export default ProductCard