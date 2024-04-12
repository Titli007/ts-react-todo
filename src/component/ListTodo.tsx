import React, { useState } from 'react'
import { TodoArrayProp } from '../abstraction/propAbstract'

//const ListTodo = ({todoArray}:{todoArray: String[]})
// const ListTodo = (props: TodoArrayProp) => {

const ListTodo = (props: TodoArrayProp) => {
  const [isComplete, setIsComplete] = useState<boolean>(false)

  const handleDelete = ():void => {
    props.deleteTodo(props.index)
  }
  

  return (
    <li >
      <span style={{
        textDecoration:isComplete? 'line-through' : 'none',
        color: isComplete ? 'gray' : 'inherit',
        }}
        >
          {props.todoArray}</span>
      <span onClick={()=>{setIsComplete(!isComplete)}}>   x</span><span onClick={handleDelete}>   delete</span>
    </li>
  )
}

export default ListTodo
