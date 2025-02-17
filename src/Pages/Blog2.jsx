import React from 'react'
import SingleBlog from '../Components/SingleBlog'
import Reusable from '../Components/Reusable'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Extra from '../Components/Extra'

const Blog2 = () => {
  return (
    <>
     <Header/>
    <Navbar/>
    <Reusable title="Single Blog" titlename=" . Single Blog"/>
    <SingleBlog/>
    <Extra/>
    <Footer/>
      
    </>
  )
}

export default Blog2
