import React, { useState } from 'react';

const TotalCompletedItem = ({datas}) => {
  
  console.log('TotalCompletedItem',datas)

  const completedTodos = datas.filter((todo) => todo.completed === true).length

  return (
    <div>
      <h4>total completed Item : {completedTodos}</h4>
    </div>
  );
};

export default TotalCompletedItem;