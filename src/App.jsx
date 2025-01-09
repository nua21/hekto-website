import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from "react-router-dom";
import Home from './Pages/Home'
import Pages from './Pages/Pages';
import Products from './Pages/Products';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import MyAccount from './Pages/MyAccount';
import ProductsDetails from './Components/ProductsDetails';

const App = () => {
  
  let myRouter = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/pages' element={<Pages/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/my-account' element={<MyAccount/>}/>
      <Route path='/product-details' element={<ProductsDetails/>}/>
    </Route>

   ))

  return (
    <>
    <RouterProvider router={myRouter}/>
    </>
  )
}

export default App

