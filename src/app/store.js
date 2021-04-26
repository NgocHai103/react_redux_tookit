import { configureStore } from '@reduxjs/toolkit';
import  productReducer from '../redux_slice/Home/productSlice';
 
export const store = configureStore({
  reducer: {
    product:productReducer
  },
});
