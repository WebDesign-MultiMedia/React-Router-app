import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import Currencies from './components/Currencies';
import Main from './components/main';
import Price from './components/Price';
import Nav from "./components/Nav";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Currencies' element={<Currencies/>}/>
      <Route path='/Price/:symbol' element={<Price/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
