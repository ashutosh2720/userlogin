import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Header from './component/Header'

function App() {
 
  return (
    <div className='flex flex-col gap-2'>
    <Header/>
      <Routes>
        <Route path = '/'  element = { <Login/>}/>
        <Route path = '/home'  element = { <Home/> }/>
      </Routes>
    </div>
  )
}

export default App
