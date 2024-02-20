import React from 'react'
import TopBar from './Topbar/TopBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'

export default function Mainlayout() {
  return (
    <div>
        <TopBar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
        </Routes>
    </div>
  )
}
