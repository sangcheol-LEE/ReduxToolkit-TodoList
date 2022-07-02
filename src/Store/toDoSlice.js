import { createSlice,createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

export const toDoData = createAsyncThunk('data/toDoData', async () => {
  return axios 
          .get('../Data/data.json')
          .then((res) => res.data)
          .catch((error) => error)
})

const dataSlice = createSlice({
  name:'todoDatas',
  initialState:{
    datas:[],
    id:'',
    title: '',
    completed: false
  },
  reducers:{
    addTodo : (state,action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false
      };
      state.datas.push(newTodo)
    }
  },
  extraReducers:{
    [toDoData.pending] : (state) => {
      console.log('data Pending') 
    },
    [toDoData.fulfilled] : (state,action) => {
       state.datas = action.payload
    },
    [toDoData.rejected] : (state, action) => {
      console.log("data Rejected")
    }
  }
})

export const {addTodo} = dataSlice.actions

export default dataSlice.reducer;