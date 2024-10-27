"use client";

import React, { useState, useEffect } from 'react'
import Intro from '../intro'
import IntroV2 from '../introV2'
import Footer from '../footer'
import Header from '../header'
import Allprojects from './allprojects'
import Link from 'next/link';

export default function Home() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(true)

  // Automatically open the modal when the page loads
  useEffect(() => {
    setIsModalOpen(true)
  }, [])

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false)

  return (
    <main style={{ height: "100%" }}>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full mx-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Browse developer page!</h2>
              <button onClick={closeModal} className="text-rose-500 hover:text-rose-800 focus:outline-none text-4xl">
                &times;
              </button>
            </div>
            <p className="mt-4 text-gray-600">
              Explore my full stack developer detail page:&nbsp;
              <Link href="/dev">
                <span className="text-base font-semibold text-sky-700 hover:underline transition">https://tonmoytalukder.github.io/dev</span>
              </Link>
            </p>
            <div className="mt-6 flex justify-end">
              <Link href="/dev">
                <button
                  onClick={closeModal}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition ease-in-out duration-200"
                >
                  Browse
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Rest of the page content */}
      <div style={{ height: "40px" }} className="bg-gray-50 mb-5">
        <span className="text-right">
          <Header />
        </span>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 scroll-container">
          <div style={{ width: "85%" }} className="feed-special-new col-span-5 mx-3 scroll-content feed-special">
            <span className="intro-special"><Intro /></span>
            <span className="intro-special-second"><IntroV2 /></span>
          </div>
          <div className="feed-special-new col-span-7 mx-3 scroll-content">
            <Allprojects />
            <br></br>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 w-full md:w-50">
        <Footer />
      </div>
    </main>
  )
}
