import {fetchProducts }from '../Api/Axios'
import { useGetProducts } from '../Queries/getdata';
import ProductCard from './ProductCard';
function Products()
{ 
    
 const {data,isLoading,isError}=useGetProducts();
  console.log(data);
  if(isLoading){ return(<p>loading...</p>)}
 
  if(isError) 
    return(<p>something worong</p>)
 

  return(
    <div >
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
         {
            data.map(
                (d)=> {
                    return (
                      <li key={d.id}>
                        <ProductCard data={d} />
                      </li>
                      );
                      }
                   )
         }
        </ul>
    </div>
  )
}
export default Products;