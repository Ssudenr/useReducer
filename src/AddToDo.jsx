import React, { useContext, useReducer } from 'react'
import { ADD_TODO} from './reducer/todo'
import { SiteContext } from './context/StiteContext'
import Todos from './Todos'

function AddToDo() {
    const {todos:{state,dispatch}}=useContext(SiteContext)
    console.log("state:"+state)
    console.log("dispatch:" +dispatch)
    function handleSubmit(event){
        event.preventDefault()
        console.log(event)
        const inputValue=event.target.elements[0].value
        dispatch({type:ADD_TODO, payload:inputValue})
        event.target.reset()
    }
  return (
    <>
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder='to do bilgisini giriniz' />
            <button type='submit'>ekle</button>
            
        </form>
        <Todos/>
    </>
  )
}

export default AddToDo