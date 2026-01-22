
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout'
 
import Products from "../Components/Products";
import ProductDetails from "../Components/ProductDetails";
import Cart from '../Components/Cart'
import ErrorLayout from '../Layouts/ErrorLayout'
import About from '../Components/About'
import MainLayout2 from "../Layouts/Mainlayout2";
 
import Customize from "../Components/Customize";
const router = createBrowserRouter([
              {     path: "/",
                    element: <MainLayout />,
                    children: [  {
                    path: "shop",
                    element: <MainLayout2 />,
                    children: [
                         
                            { path: "products", element: <Products /> },
                            { path: "products/:id", element: <ProductDetails />, 
                                children:[
                                    {path: 'customize', element: <Customize />}
                                ]
                            },
                            { path: "cart", element: <Cart /> },
                            { path: "*",element: <ErrorLayout />,}
                            ],
                },
                {
                    path: "*",
                    element: <ErrorLayout />,
                },
                {
                    path: "/about",
                    element: <About />,
                }]
            }
                ]);
export default router;