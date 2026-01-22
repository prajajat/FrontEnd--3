import axios from "axios";

 
const instance = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


export const fetchProducts = async () =>
 await instance.get("/products").then((res) => res.data.products);

export const fetchProduct = async (id) =>
 await instance.get("/products/"+id).then((res) => res.data.products);
