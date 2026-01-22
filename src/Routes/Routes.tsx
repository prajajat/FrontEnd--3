
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Layouts/MainLayout'
import Home from '../Components/Home';
import Products from "../Components/Products";
import ProductDetails from "../Components/ProductDetails";
import Cart from '../Components/Cart'
import ErrorLayout from '../Layouts/ErrorLayout'
import About from '../Components/About'
import MainLayout2 from "../Layouts/Mainlayout2";
const router = createBrowserRouter([
              { path: "/",
                    element: <MainLayout />,
                 children: [  {
                    path: "shop",
                    element: <MainLayout2 />,
                    children: [
                            // { index: true, element: <Home /> },
                            { path: "products", element: <Products /> },
                            { path: "products/:id", element: <ProductDetails /> },
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