import React from 'react';

const AddToDoList = ({data,idx}) => {
  return (
    <div key={idx}>
        <input type="checkbox"/>
        <div>{data.title}</div>
        <button>delete</button>
    </div>
  );
};

export default AddToDoList;