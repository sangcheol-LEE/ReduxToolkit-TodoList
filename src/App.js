import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTodoForm from './Components/AddTodoForm';
import AddToDoList from './Components/AddToDoList';
import { toDoData } from './Store/toDoSlice'
import "./Components/All.css"

const App = () => {
  const datas = useSelector((state) => state.datas.datas)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toDoData())
  },[])

 console.log(datas)
  

  return (
      <div id="main">
      <h1>Ian's Todo List use ReduxTollKit</h1>
      <AddTodoForm />
      {
      datas.map((item,idx) => {
        return <AddToDoList key={idx+1}data={item} idx={idx}/>
      } )  
      }
      </div>
  );
};

export default App;