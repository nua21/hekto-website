import React from 'react'
import Reusable from '../Components/Reusable'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BlogPage from '../Components/BlogPage'
import Extra from '../Components/Extra'

const Blog = () => {
  return (
    <>
        <Header/>
        <Reusable  title="Blog Page" titlename= ". Blog Page"/>
        <BlogPage/>
        <Extra/>
        <Footer/>
    </>
  )
}

export default Blog
