import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleChecked ,activeDelete} from '../Store/toDoSlice';
import './All.css'

const AddToDoList = ({data,idx}) => {
  const dispatch = useDispatch()

  const {id, completed} = data

  const handleClick = () => {
    dispatch(
      toggleChecked({
        id:id,
        completed: !completed
      })
    )
  }

  const handleDelete = () => {
    dispatch(
      activeDelete({
        id:id
      })
    )
  }
  return (
    <div key={idx} className="toDoListContainer">
        <div className="box" >
          <input type="checkbox" checked={completed} onChange={handleClick}/>
          <div className="title">{data.title}</div>
        </div>
        <button onClick={handleDelete}>delete</button>
    </div>
  );
};

export default AddToDoList;