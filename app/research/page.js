import React from 'react'
import Intro from '../intro'
import Footer from '../footer'
import Header from '../header'
import Research from './allresearch'
import Head from 'next/head'

export default function Home() {
  return (
    <main style={{height: "100%"}}>

<Head>
      <title>Research - Tonmoy Talukder</title>
    </Head>
<div style={{height: "40px"}} className="bg-gray-50 mb-5">
    <span className="text-right">
      <Header/>
    </span>
  </div>

<div className="container mx-auto">
  <div className="grid grid-cols-12 gap-4 scroll-container">
    <div style={{width: "85%"}} className="feed-special-new col-span-5 mx-3 scroll-content feed-special">
      <Intro/>
    </div>
    <div className="feed-special-new col-span-7 mx-3 scroll-content">
      <Research/>
      <br></br>
    </div>
  </div>
</div>

<div  className="bg-slate-50 w-full md:w-50"> 
    <Footer/>
    {/* style={{height: "50px"}} */}
  </div>

    </main>
  )
}
