import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../Store/toDoSlice'
import './All.css'

const AddTodoForm = () => {
  const dispatch = useDispatch()

  const [text, setText] = useState();

  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addTodo({
        title:text,
      })
    );
    setText('')
  }

  const handleChagne = (e) => {
    const {value} = e.target
    setText(value)

  }

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