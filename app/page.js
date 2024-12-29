'use client';
import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Intro from './intro';
import Recent from './feed/recent';
import Publications from './feed/publication';
import Info from './feed/info';
import Projects from './feed/project';
import Footer from './footer';
import Header from './header';
import Map from './components/Revolver';

export default function Home() {
  useEffect(() => {
    // Add your script here
    const script = document.createElement('script');
    script.src =
      '//rf.revolvermaps.com/0/0/6.js?i=5k2gkdgyi81&m=0&c=ff0000&cr1=ffffff&f=verdana&l=0&s=220';
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
    <main style={{ height: '100%' }}>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Tonmoy Talukder | Machine Learning & AI Engineer | NLP & Computer
          Vision Researcher | Full Stack Developer
        </title>
        <meta
          name="description"
          content="Dive into the expertise and research of Tonmoy Talukder, a dedicated Machine Learning & AI Engineer specializing in Natural Language Processing, Computer Vision, Multimodal Deep Learning, and Full Stack Development. Explore innovative work on low-resource languages, human-computer interaction, and generative AI solutions."
        />
        <meta name="author" content="Tonmoy Talukder" />
        <meta
          name="keywords"
          content="Tonmoy Talukder, Machine Learning, Artificial Intelligence, NLP, Computer Vision, Multimodal Deep Learning, Low-Resource Language, AI Research, Research Engineer, Full Stack Developer, Human-Computer Interaction, Pytorch, TensorFlow, Deep Learning, Bangla Language, Generative AI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Tonmoy Talukder | Machine Learning & AI Engineer | NLP & Computer Vision Researcher | Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Discover Tonmoy Talukder's cutting-edge work in Machine Learning, Artificial Intelligence, Natural Language Processing, Computer Vision, Full Stack Development, and solutions for low-resource languages like Bangla."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/45537503"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:url" content="https://tonmoytalukder.github.io/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tonmoy Talukder | Machine Learning & AI Engineer | NLP & Computer Vision Researcher | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Explore the groundbreaking work of Tonmoy Talukder in advancing Machine Learning, AI, Natural Language Processing, Computer Vision, Full Stack Development, and multimodal learning solutions for low-resource languages and human-computer interaction."
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/45537503"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://tonmoytalukder.github.io/" />

        {/* Author Links */}
        <link rel="me" href="https://github.com/TonmoyTalukder" />
        <link rel="me" href="https://www.linkedin.com/in/tonmoytalukder/" />
        <link
          rel="me"
          href="https://scholar.google.com/citations?user=_6Nj60QAAAAJ&hl=en"
        />
        <link rel="me" href="https://www.youtube.com/@TonmoyTalukder" />

        {/* Additional Meta Data */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'WebPage',
            name: 'Tonmoy Talukder | Machine Learning & AI Engineer | NLP & Computer Vision Researcher | Full Stack Developer',
            inLanguage: 'en',
            audience: [
              {
                '@type': 'Audience',
                geographicArea: {
                  '@type': 'AdministrativeArea',
                  name: 'Global',
                },
              },
              {
                '@type': 'Audience',
                geographicArea: {
                  '@type': 'Country',
                  name: 'United States',
                },
              },
              {
                '@type': 'Audience',
                geographicArea: {
                  '@type': 'Country',
                  name: 'United Kingdom',
                },
              },
              {
                '@type': 'Audience',
                geographicArea: {
                  '@type': 'Country',
                  name: 'India',
                },
              },
              {
                '@type': 'Audience',
                geographicArea: {
                  '@type': 'Country',
                  name: 'Bangladesh',
                },
              },
            ],
            url: 'https://tonmoytalukder.github.io/',
          })}
        </script>
      </Head>

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
      <div style={{ height: '40px' }} className="bg-gray-50 mb-5">
        <span className="text-right">
          <Header />
        </span>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-12 justify-center gap-4 scroll-container">
          <div
            style={{ width: '85%' }}
            className="feed-special-new feed-special col-span-5 mx-3 scroll-content"
          >
            <Intro />
          </div>
          <div className="feed-special-new col-span-7 mx-3 scroll-content">
            <Recent />
            <br></br>
            <Publications />
            <br></br>
            <Projects />
            {/* <br></br> */}
            {/* <Map/> */}
            <br></br>
            <Info />
            <br></br>
            <div style={{ textAlign: 'center' }}>
              {/* <script type="text/javascript" src="//rf.revolvermaps.com/0/0/6.js?i=58mzz8jl3nk&amp;m=0&amp;c=ff0000&amp;cr1=ffffff&amp;f=verdana&amp;l=0&amp;s=220" async="async"></script> */}
            </div>
            <div className="flex justify-center">
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
            <hr />
            <hr />
          </div>
        </div>
      </div>

      <div className="bg-slate-50 w-full md:w-50">
        <Footer />
        {/* style={{height: "50px"}} */}
      </div>
    </main>
  );
}
