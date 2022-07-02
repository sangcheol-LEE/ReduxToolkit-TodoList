import React,{useCallback} from 'react';
import { useDispatch } from 'react-redux';
import { toggleChecked ,activeDelete} from '../Store/toDoSlice';
import './All.css'

const AddToDoList = ({data,idx}) => {
  const dispatch = useDispatch()

  const {id, completed,title} = data

  const handleClick = useCallback(() => {
    dispatch(
      toggleChecked({
        id:id,
        completed: !completed
      })
    )
  },[data])

  const handleDelete = useCallback(() => {
    dispatch(
      activeDelete({
        id:id
      })
    )
  },[data])

  return (
    <div key={idx} className="toDoListContainer">
        <div className="box" >
          <input type="checkbox" checked={completed} onChange={handleClick}/>
          <div className={completed ? "title done" : "title"} >{title}</div>
        </div>
        <button onClick={handleDelete} >Delete</button>
    </div>
  );
};

export default AddToDoList;