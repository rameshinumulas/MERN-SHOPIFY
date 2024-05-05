import React from 'react'
import TopBar from './Topbar/TopBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import AllProducts from './Products/AllProducts';

export default function Mainlayout(props) {
  const { history } = props;
  return (
    <div>
        <TopBar history={history} />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/viewProducts' element={<AllProducts />}></Route>
        </Routes>
    </div>
  )
}
