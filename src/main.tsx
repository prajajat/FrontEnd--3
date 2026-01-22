import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.tsx'
import { store } from './Store/Store.ts'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router} /> 
      </Provider>
      </QueryClientProvider>
  </StrictMode>
)

 

