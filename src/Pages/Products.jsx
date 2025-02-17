import React from 'react'
import Reusable from '../Components/Reusable'
import Products1 from '../Components/Products1'
import Products2 from '../Components/Products2'
import Products3 from '../Components/Products3'
import Extra from '../Components/Extra'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Products = () => {
  return (
    <>
    <Header/>
    <Reusable title="Product Details" titlename=" .  Product Details" />
    <Products1 />
    <Products2/>
    <Products3/>
    <Extra/>
    <Footer/>
    </>
   
  )
}

export default Products
