'use client'
import React from 'react'
import { useEffect } from 'react';
import Image from 'next/image'
import Intro from './intro'
import Recent from './feed/recent'
import Publications from './feed/publication'
import Info from './feed/info'
import Projects from './feed/project'
import Footer from './footer'
import Header from './header'
import Map from './components/Revolver'

export default function Home() {
  useEffect(() => {
    // Add your script here
    const script = document.createElement('script');
    script.src = '//rf.revolvermaps.com/0/0/6.js?i=5k2gkdgyi81&m=0&c=ff0000&cr1=ffffff&f=verdana&l=0&s=220';
    script.async = true;

    // Load the script inside the specific div with the id "mapContainer"
    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer) {
      mapContainer.appendChild(script);
    }

    return () => {
      // Remove the script when the component unmounts
      if (mapContainer && mapContainer.contains(script)) {
        mapContainer.removeChild(script);
      }
    };
  }, []);
  return (
    <main style={{height: "100%"}}>
      {/* <div className="grid grid-cols-12 gap-1">
        <div className="col-span-4 h-screen border">01</div>
        <div className="col-span-8 h-screen border">02</div>
      </div> */}
{/* <div className="fixed top-0 left-0 right-0">

</div> */}
{/* <br></br>
<br></br>
<br></br>
<br></br> */}
<div style={{height: "40px"}} className="bg-gray-50 mb-5">
    <span className="text-right">
      <Header/>
    </span>
  </div>

<div className="container mx-auto">
  <div className="grid grid-cols-12 justify-center gap-4 scroll-container">
    <div style={{width: "85%"}} className="feed-special-new feed-special col-span-5 mx-3 scroll-content">
      <Intro/>
    </div>
    <div className="feed-special-new col-span-7 mx-3 scroll-content">
      <Recent/>
      <br></br>
      <Publications/>
      <br></br>
      <Projects/>
      {/* <br></br> */}
      {/* <Map/> */}
      <br></br>
      <Info/>
      <br></br>
      <div style={{textAlign: 'center'}}>
        {/* <script type="text/javascript" src="//rf.revolvermaps.com/0/0/6.js?i=58mzz8jl3nk&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=verdana&amp;l=0&amp;s=220" async="async"></script> */}
      </div>
      <div className='flex justify-center'>
      {/* <iframe scrolling="no" frameborder="0" width="220" height="220" src="//rf.revolvermaps.com/w/1/a/a2.php?i=5a268fi35co&amp;s=220&amp;m=0&amp;v=false&amp;r=false&amp;b=000000&amp;n=false&amp;c=ff0000"></iframe> */}
      {/* <iframe scrolling="no" frameborder="0" allowtransparency="true" width="320" height="320" src="//rf.revolvermaps.com/w/6/a/a2.php?i=5b7vr82xdt7&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=verdana&amp;l=0"></iframe> */}
    {/* <a href="https://www.revolvermaps.com/livestats/59b76zlhpq1/"  target="_blank" rel="noreferrer">
      <img
        src="//rf.revolvermaps.com/h/m/a/0/ff0000/128/0/59b76zlhpq1.png"
        width="100%"
        // height="128"
        alt="Map"
        style={{ border: 2 }}
      />
    </a> */}
    {/* <Map/> */}
    <div id="mapContainer">
        {/* The globe script will be loaded inside this div */}
    </div>
  </div>
  
  
  <br></br>
      <hr/>
      <hr/>
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
