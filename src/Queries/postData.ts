import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchProduct, fetchProducts, postProduct } from "../Api/Axios";

export const postData = () =>
  useMutation({  mutationFn: postProduct });

 