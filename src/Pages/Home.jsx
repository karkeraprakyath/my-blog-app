import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'

import Footer from '../Components/Footer'
import BlogList from '../Components/BlogList'

function Home() {
  return (
    <div>
        <Header/>
        <Search/>
       
       <BlogList/>
       <Footer/>
    </div>
  )
}

export default Home