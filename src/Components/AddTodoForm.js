import React,{useState,useCallback} from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../Store/toDoSlice'
import './All.css'

const AddTodoForm = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState();

  const handelSubmit = useCallback((e) => {
    e.preventDefault()
    dispatch(
      addTodo({
        title:text,
      })
    );
    setText('')
  },[text])

  const handleChagne = useCallback((e) => {
    const {value} = e.target
    setText(value)
  },[text])

  return (
    <div>
      <form onSubmit={handelSubmit} className="form">
        <input 
          type="text"
          placeholder="..add Todo"
          value={text || ""}
          onChange={handleChagne}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodoForm;