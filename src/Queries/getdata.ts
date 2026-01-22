import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../Api/Axios";



export const useGetProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: fetchProducts });
 