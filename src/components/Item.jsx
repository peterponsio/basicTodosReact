import React from 'react'

export function Item({todo, toggleCompleted}) {
  const {id,task,completed} = todo;

  const changeCompleted = () => {
    toggleCompleted(id);
  }

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={changeCompleted} />
      {task}
    </li>
  )
}
