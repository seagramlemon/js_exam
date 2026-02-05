import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import SideMenu from './component/SideMenu'
import Memo from './page/Memo'
import Attention from './page/Attention'
import "./style/default.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideMenu />
      <Routes>
        <Route path='/memo' element={<Memo />}/>
        <Route path='/attention' element={<Attention />} />
      </Routes>
    </>
  )
}

export default App
