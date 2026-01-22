import { useQuery } from "@tanstack/react-query";
import { fetchProduct, fetchProducts } from "../Api/Axios";



export const useGetProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: fetchProducts });

export const useGetProduct = (id) =>
  useQuery({ queryKey: ["products",id], queryFn: ()=>fetchProduct(id) })
 