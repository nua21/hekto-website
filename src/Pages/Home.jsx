import React from 'react'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import LatestProducts from '../Components/LatestProduct'
import Shopex from '../Components/Shopex'
import UniqueFeatures from '../Components/UniqueFeatures'
import Trending from '../Components/Trending'
import Discount from '../Components/Discount'
import TopCategories from '../Components/TopCategories'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Subscribe from '../Components/Subscribe'
import LatestBlog from '../Components/LatestBlog'
import Extra from '../Components/Extra'


const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Hero/>
    <Featured/>
    <LatestProducts/>
    <Shopex/>
    <UniqueFeatures/>
    <Trending/>
    <Discount/>
    <TopCategories/>
    <Subscribe/>
    <Extra/>
    <LatestBlog/>
    <Footer/>
    </>
  )
}

export default Home
