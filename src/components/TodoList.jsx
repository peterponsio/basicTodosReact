import React from 'react'
import {Item} from './Item'


export function TodoList({list, toggleCompleted}) {
  
  return (
    <ul>
      {
       list.map((element) => (
        <Item key={element.id} todo={element} toggleCompleted={toggleCompleted}/>
       ))
      }
    </ul>
  )
}
