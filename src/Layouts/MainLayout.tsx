import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

function MainLayout()
{   
   const cart=useSelector((state)=>state.cart);
  return(<>
  <nav className="relative bg-gray-800">
          <div className="flex space-x-4">
            <NavLink to="/about" className={({ isActive}) => isActive ? "text-blue-700" : "text-blue-300"}>About</NavLink>
            <NavLink to="/shop/cart" className={({ isActive }) =>isActive ? "text-blue-700" : "text-blue-300"} >Cart {cart.items.length-1}</NavLink>
            <NavLink to="/shop/products" className={({ isActive }) =>isActive ? "text-blue-700" : "text-blue-300"}>Products</NavLink>
             
          </div>
         
</nav>
 <Outlet />
 </>
  );
}
export default MainLayout;