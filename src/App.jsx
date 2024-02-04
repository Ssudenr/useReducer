import { useContext, useReducer, useState } from 'react'
import { INCREMENT, DECREMENT, RESET, countReducer, initialCountState } from './reducer/counter'
import About from './About'
import { SiteContext } from './context/StiteContext'
import ContextAboutPage from './ContextAboutPage'
import AddToDo from './AddToDo'


function App() {

  const {counter:{state,dispatch}}=useContext(SiteContext)
  console.log(state)
 // const [count, dispatch] = useReducer(countReducer, initialCountState)
  // const [count, setCount] = useState(0)

  // function artir()
  // {
  //   setCount(prev=>prev+1)
  // }
  // function azalt()
  // {
  //   setCount(prev=>prev-1)
  // }
  // function sifirla()
  // {
  //   setCount(0)
  // }

  return (
    <>
      <AddToDo/>
      <hr />
      <hr />
      <h2>Sayaç  : : : {state} </h2>
      <button onClick={() => dispatch(INCREMENT)} >Artır</button>
      <button onClick={() => dispatch(DECREMENT)}>Azalt</button>
      <button onClick={() => dispatch(RESET)}>Sıfırla</button> 
      <hr/>
      <hr/>
      <ContextAboutPage/>
      <hr />
      <hr />
      <About />

    </>
  )
}

export default App
