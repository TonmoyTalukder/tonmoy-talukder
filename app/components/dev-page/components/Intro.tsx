'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaRegEye } from 'react-icons/fa';
import { FaGithubSquare, FaCode } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';
import { useSectionInView } from '../lib/hooks';
import { useActiveSectionContext } from '../context/active-section-context';
import Typed from 'typed.js';

export default function Intro() {
  const { ref } = useSectionInView('Intro', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const el = useRef(null);

  useEffect(() => {
    // Check if el.current is not null before initializing the Typed instance
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          '<span style="font-weight: 500;">I am a Full Stack Developer</span>',
          '<span style="font-weight: 500;">I have expertise in React &amp; Next.js</span>',
          '<span style="font-weight: 500;">I have expertise in TypeScript</span>',
          '<span style="font-weight: 500;">I have expertise in PostgreSQL &amp; Prisma</span>',
          '<span style="font-weight: 500;">I am a CS Graduate</span>',
        ],
        typeSpeed: 150,
        loop: true,
        contentType: 'html',
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);

  return (
    <section
      ref={ref}
      id="#"
      className="mb-30 flex flex-col lg:flex-row gap-16 justify-center items-center mx-auto max-w-5xl px-8 sm:px-12 text-gray-800 sm:mb-0 mt-[16vh]"
    >
      {/* Intro Section */}
      <div className="flex flex-col items-center text-center lg:w-1/2">
        <div className="relative flex flex-col items-center mb-4">
          {/* Animated Frame */}
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 h-full w-full rounded-full"
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: 'linear',
            }}
          ></motion.div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
            className="relative z-10"
          >
            <Image
              src="https://i.ibb.co/X7QwZ6Y/Tonmoy-Talukder.jpg"
              alt="Tonmoy portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </motion.div>
        </div>

        {/* Header Text */}
        <motion.h1
          className="mt-2 px-4 text-3xl font-semibold !leading-[1.5] sm:text-4xl text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I&apos;m <span className="font-bold text-sky-600">Tonmoy</span>
          .
        </motion.h1>

        <motion.div
          className="mt-2 px-4 text-2xl font-semibold !leading-[1.5] text-left"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <br />
          <p className="text-center h-7">
            <span style={{ font: 'bold' }} ref={el} />
          </p>
          <br />
          <br />
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 mt-6 px-4 justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* First Row: Contact & View Resume */}
          <div className="flex flex-wrap gap-4 justify-center w-full sm:w-auto">
            <Link
              href="#contact"
              className="group bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-500 text-white px-6 py-2 flex items-center gap-2 rounded-full hover:bg-sky-700 transition"
            >
              Contact Me{' '}
              <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-500 text-white px-8 py-2 flex items-center gap-3 rounded-full shadow-lg hover:shadow-xl transition-transform duration-300"
              href="/Resume of Tonmoy Talukder Full Stack Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume{' '}
              <FaRegEye
                className="text-xl group-hover:rotate-180 transition-transform"
                style={{ transitionDuration: '1.2s' }}
              />
            </a>
          </div>

          {/* Second Row: Download Resume */}
          <div className="flex justify-center w-full">
            <a
              className="group bg-white text-sky-600 border-2 border-sky-600 px-6 py-2 flex items-center gap-2 rounded-full hover:bg-sky-50 transition"
              href="/Resume of Tonmoy Talukder Full Stack Developer.pdf"
              download
            >
              Download Resume{' '}
              <HiDownload className="opacity-80 group-hover:translate-y-1 transition" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 mt-6 px-4 justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <a
            className="bg-white p-3 text-gray-600 hover:text-[#0A66C2] flex items-center gap-2 rounded-full hover:bg-sky-50 transition"
            href="https://www.linkedin.com/in/tonmoytalukder/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="text-2xl" />
          </a>

          <a
            className="bg-white p-3 text-gray-600 hover:text-[#171515] flex items-center gap-2 rounded-full hover:bg-sky-50 transition"
            href="https://github.com/TonmoyTalukder"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className="text-2xl" />
          </a>

          <a
            className="bg-white p-3 text-gray-600 hover:text-[#FFA116] flex items-center gap-2 rounded-full hover:bg-sky-50 transition"
            href="https://leetcode.com/u/zishnav/"
            target="_blank"
            rel="noreferrer"
          >
            <FaCode className="text-2xl" />
          </a>

          <a
            className="bg-white p-3 text-gray-600 hover:text-[#171515] flex items-center gap-2 rounded-full hover:bg-sky-50 transition"
            href="https://x.com/TonmoyTalukder_"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter className="text-2xl" />
          </a>

          <a
            className="bg-white p-3 text-gray-600 hover:text-[#25D366] flex items-center gap-2 rounded-full hover:bg-sky-50 transition"
            href="https://api.whatsapp.com/send?phone=8801880788228"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </motion.div>
      </div>

      {/* About Section */}
      <div className="lg:w-1/2 lg:pr-8 text-justify">
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          After completing my Bachelor of Science in{' '}
          <span className="font-medium text-sky-600">
            Computer Science and Engineering
          </span>
          , I dove deep into the world of programming. My journey has been
          fueled by a love for solving software &amp; machine learning
          solutions—it’s like cracking a tough puzzle!
        </motion.p>
        <motion.p
          className="text-lg leading-relaxed mt-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          I enjoy developing <span className="font-medium">applications</span>{' '}
          using{' '}
          <span className="font-medium text-sky-600">
            React<span className="text-black">, </span>
            Next.js<span className="text-black">, </span>
            Node.js<span className="text-black">, </span>
            Express.js<span className="text-black"> and </span>
            MongoDB
          </span>
          <span className="text-black"> or </span>
          <span className="font-medium text-sky-600">PostgreSQL</span> mostly.
          With strong foundations in{' '}
          <span className="font-medium">JavaScript</span> and{' '}
          <span className="font-medium">Python</span>, I’m also proficient in
          <span className="font-medium"> TypeScript</span>.
        </motion.p>
        <motion.p
          className="text-lg leading-relaxed mt-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          I’m currently seeking a{' '}
          <span className="font-bold text-sky-600">full-time position</span> as
          a software engineer to further refine my skills and make impactful
          contributions. Always open to learning new technologies, I’m ready to
          embrace what comes next!
        </motion.p>
      </div>
    </section>
  );
}
