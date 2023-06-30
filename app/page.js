import React from 'react'
import Image from 'next/image'
import Intro from './intro'
import Recent from './feed/recent'
import Publications from './feed/publication'
import Info from './feed/info'
import Projects from './feed/project'
import Footer from './footer'
import Header from './header'

export default function Home() {
  return (
    <main style={{height: "100%"}}>
      {/* <div class="grid grid-cols-12 gap-1">
        <div class="col-span-4 h-screen border">01</div>
        <div class="col-span-8 h-screen border">02</div>
      </div> */}
{/* <div class="fixed top-0 left-0 right-0">

</div> */}
{/* <br></br>
<br></br>
<br></br>
<br></br> */}
<div style={{height: "40px"}} class="bg-gray-50 mb-5">
    <span class="text-right">
      <Header/>
    </span>
  </div>

<div class="container mx-auto">
  <div class="grid grid-cols-12 gap-4 scroll-container">
    <div style={{height: "800px"}} class="col-span-5 mx-3 scroll-content">
      <Intro/>
    </div>
    <div style={{height: "800px"}} class="col-span-7 mx-3 scroll-content">
      <Recent/>
      <br></br>
      <Publications/>
      <br></br>
      <Projects/>
      <br></br>
      <Info/>
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
