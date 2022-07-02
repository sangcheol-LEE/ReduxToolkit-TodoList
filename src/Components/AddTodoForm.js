import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../Store/toDoSlice'

const AddTodoForm = () => {
  const dispatch = useDispatch()

  const [value, setValue] = useState();

  const handelSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addTodo({
        title:value,
      })
    );
    setValue('')
  }

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input 
          type="text"
          placeholder="..add Todo"
          value={value}
          onChange={(e) =>setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodoForm;