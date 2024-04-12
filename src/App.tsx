import { useState } from 'react'
import ListTodo from './component/ListTodo'

function App() {

  const [todotext, setTodoText] = useState<String>('')
  const [todoArray, setTodoArray] = useState<String[]>([])

  const formHandler = (e : React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setTodoArray((prev)=> [...prev, todotext])
  }

  const deleteTodo = (index : number):void => {
    const newTodoArray = [...todoArray]
    newTodoArray.splice(index,1)
    setTodoArray(newTodoArray)
  }

  return (
      <div>
        <h1>Your Personalized Todo List</h1>
        <form onSubmit={formHandler}>
          <label htmlFor='todoInput'>Enter Todo</label>
          <input id='todoInput' type='text' onChange={(e)=>{setTodoText(e.target.value)}}/>
          <button type='submit'>Submit</button>
        </form>
        {
          todoArray.length>0&&(
            todoArray.map((data:String,index:number)=>
            (
              <ul key={index}>
                <ListTodo todoArray = {data} deleteTodo={deleteTodo} index={index}/>
              </ul>
            ))
          )
        }
        
      </div>
  )
}

export default App
