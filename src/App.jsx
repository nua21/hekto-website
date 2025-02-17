import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import Home from './Pages/Home'
import Pages from './Pages/Pages';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import MyAccount from './Pages/MyAccount';
import Nothing from './Components/Nothing';
import Products from './Pages/Products';
import Blog from './Pages/Blog';
import Blog2 from './Pages/Blog2';

const App = () => {
  
  let myRouter = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages' element={<Pages/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path= '/blog' element={<Blog/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-account' element={<MyAccount/>}/>
      <Route path='/here?' element={<Nothing/>}/>
      <Route path='/single-blog' element={<Blog2/>}/>
    </Route>

   ))

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App

