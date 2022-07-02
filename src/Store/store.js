import { configureStore } from "@reduxjs/toolkit";
import dataReducer from './toDoSlice';

const store = configureStore({
  reducer:{
    datas:dataReducer
  }
})

export default store