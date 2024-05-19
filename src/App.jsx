import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'

import { Home } from './pages/home/Home'
import { SideBar } from './mainComponents/sideBar/SideBar'
import { Components } from './pages/library/Components'
import { AlertDoc,AvatarDoc, BadgeDoc,ButtonDoc,CardDoc,HeadingDoc,ImageDoc,TextDoc } from './documentation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components' element={<Components />} />
        <Route path='/components/alerts' element={<AlertDoc />} />
        <Route path='/components/avatars' element={<AvatarDoc />} />
        <Route path='/components/badges' element={<BadgeDoc />} />
        <Route path='/components/buttons' element={<ButtonDoc />} />
        <Route path='/components/cards' element={<CardDoc />} />
        <Route path='/components/heading' element={<HeadingDoc />} />
        <Route path='/components/image' element={<ImageDoc />} />
        <Route path='/components/text' element={<TextDoc />} />
      </Routes>
    </div>
  )
}

export default App
