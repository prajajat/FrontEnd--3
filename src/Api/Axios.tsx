import axios from "axios";

 
const instance = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  headers: {'X-Custom-Header': 'foobar'}
});


export const fetchProducts = async () =>
 await instance.get("/products").then((res) => res.data.products);


export const fetchProduct = async (id) =>
 await instance.get("/products/"+id).then((res) => res.data);

export const postProduct = async (data) =>
 await instance.get("/products/").then((res) => res.data);

axios.interceptors.request.use(config => {
config.headers.Authorization = `Bearer ${'abc'}`;
return config;
});
 
axios.interceptors.response.use(res => res,
     err => {
          if (err.response.status === 404) {
            
          }
      return Promise.reject(err);
}
);
 