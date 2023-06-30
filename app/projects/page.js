import React from 'react'
import Intro from '../intro'
import Footer from '../footer'
import Header from '../header'
import Allprojects from './allprojects'

export default function Home() {
  return (
    <main style={{height: "100%"}}>
<div style={{height: "40px"}} class="bg-gray-50 mb-5">
    <span class="text-right">
      <Header/>
    </span>
  </div>

<div class="container mx-auto">
  <div class="grid grid-cols-12 gap-4 scroll-container">
    <div style={{height: "820px",  width: "85%"}} class="col-span-5 mx-3 scroll-content feed-special">
      <Intro/>
    </div>
    <div style={{height: "820px"}} class="col-span-7 mx-3 scroll-content">
      <Allprojects/>
      <br></br>
    </div>
  </div>
</div>

<div  class="bg-slate-50 w-full md:w-50"> 
    <Footer/>
    {/* style={{height: "50px"}} */}
  </div>

    </main>
  )
}
