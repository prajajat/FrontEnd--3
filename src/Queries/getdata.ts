import { useQuery } from "@tanstack/react-query";
import { fetchProduct, fetchProducts } from "../Api/Axios";



export const useGetProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: fetchProducts ,staleTime :4*60*1000});

export const useGetProduct = (id) =>
  useQuery({ queryKey: ["products",id], queryFn: ()=>fetchProduct(id),staleTime :4*60*1000,enabled :!!id })
 