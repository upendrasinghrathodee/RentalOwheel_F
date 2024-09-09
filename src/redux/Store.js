import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slice';

const store=configureStore({
   reducer:{
      carts:cartReducer
   }
})

export default store;