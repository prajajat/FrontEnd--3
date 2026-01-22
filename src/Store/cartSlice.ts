import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../Store/Store'

 
const initialState = 
 {
    items:[{
        id: -1,
        title: '',
        price:0,
        quantity:0,
        customization: '',
    }
    ]
 }


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state,action) => {

      const existing = state.items.find(
        (item) =>
          item.id === action.payload.id  
      );
      if (existing) {
        existing.quantity += 1;
      }  
      
    },
    decrement: (state,action) => {
       const existing = state.items.find(
        (item) =>
          item.id === action.payload.id  
      );
      if (existing) {
        if(existing.quantity<=1) {
           const newItems=state.items.filter((i)=>i.id!==action.payload.id )
            state.items=newItems;
        }
        else{
        existing.quantity -= 1;
        }
      }  
    },
    addToCart: (state,action) => {
      const existing = state.items.filter(
        (item) =>
          item.id === action.payload.id &&
          item.customization === action.payload.customization
      );
          console.log(state.items[0].id);   
          console.log(existing); 
      if (existing.length==0) {
    
         state.items.push({ ...action.payload, quantity: 1 })
         
      } else {
      const  newItems=state.items.map((item)=>{

            if(  item.id === action.payload.id &&
          item.customization === action.payload.customization)return {...item,quantity:item.quantity+1}
          else return item;

        });
        state.items=newItems
        console.log(newItems);
      }
      
    },
    
  },
})

export const { increment, decrement,addToCart } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer