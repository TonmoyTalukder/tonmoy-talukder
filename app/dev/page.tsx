import React from 'react';
import Head from 'next/head';
import Intro from '../components/dev-page/components/Intro';
import Skills from '../components/dev-page/components/skills';
import SectionDivider from '../components/dev-page/components/section-divider';
import Contact from '../components/dev-page/components/contact';
import Projects from '../components/dev-page/components/projects';
import Blogs from '../components/dev-page/components/blogs';

export default function Home() {
  return (
    <main
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Metadata */}
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Tonmoy Talukder | Full Stack Developer (MERN, Next.js, PostgreSQL) |
          NLP & Computer Vision Research Enthusiast
        </title>
        <meta
          name="description"
          content="Explore the professional portfolio of Tonmoy Talukder, a Full Stack Developer with expertise in MERN Stack, Next.js, PostgreSQL, Prisma, and Python. Also a passionate researcher in Natural Language Processing (NLP) and Computer Vision."
        />
        <meta
          name="keywords"
          content="Tonmoy Talukder, Full Stack Developer, MERN Stack, Next.js, PostgreSQL, Prisma, TypeScript, Python, NLP, Computer Vision, AI Research, Scalable Web Apps, Machine Learning, Deep Learning"
        />
        <meta name="author" content="Tonmoy Talukder" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Tonmoy Talukder | Full Stack Developer (MERN, Next.js, PostgreSQL) | NLP & Computer Vision Research Enthusiast"
        />
        <meta
          property="og:description"
          content="Discover the work of Tonmoy Talukder, a Full Stack Developer specializing in MERN Stack, Next.js, PostgreSQL, and Prisma. Passionate about cutting-edge research in NLP and Computer Vision."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/TonmoyTalukder/TonmoyTalukder/refs/heads/main/images/cover.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://tonmoytalukder.github.io/dev"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tonmoy Talukder | Full Stack Developer (MERN, Next.js, PostgreSQL) | NLP & Computer Vision Research Enthusiast"
        />
        <meta
          name="twitter:description"
          content="Tonmoy Talukder's expertise spans Full Stack Development with MERN, Next.js, PostgreSQL, and Prisma, alongside AI research in NLP and Computer Vision."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/TonmoyTalukder/TonmoyTalukder/refs/heads/main/images/cover.png"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://tonmoytalukder.github.io/dev" />

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
            name: 'Tonmoy Talukder | Full Stack Developer (MERN, Next.js, PostgreSQL) | NLP & Computer Vision Research Enthusiast',
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
                  '@type': 'Continent',
                  name: 'Europe',
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
                  name: 'Germany',
                },
              },
              {
                '@type': 'Audience',
                geographicArea: {
                  '@type': 'Country',
                  name: 'Canada',
                },
              },
              {
                '@type': 'Audience',
                geographicArea: {
                  '@type': 'Country',
                  name: 'Japan',
                },
              },
              {
                '@type': 'Audience',
                geographicArea: {
                  '@type': 'Country',
                  name: 'Singapore',
                },
              },
              {
                '@type': 'Audience',
                geographicArea: {
                  '@type': 'Country',
                  name: 'Australia',
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
            url: 'https://tonmoytalukder.github.io/dev',
          })}
        </script>
      </Head>

      <Intro />
      <SectionDivider />
      <Projects />
      <Skills />
      <Blogs />
      <Contact />
    </main>
  );
}
