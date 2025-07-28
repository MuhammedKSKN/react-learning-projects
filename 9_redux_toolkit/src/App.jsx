import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/counterSlice.jsx'


import './App.css'

function App() {

  // useSelector ile store'dan counter değerini alıyoruz
  const dispatch = useDispatch();

  const { value } = useSelector((store) => store.counter);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App
