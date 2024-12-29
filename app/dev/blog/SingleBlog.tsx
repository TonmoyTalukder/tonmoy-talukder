// app/dev/blog/SingleBlog.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { FiTwitter, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi'; // Social Icons
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animations

interface SingleBlogProps {
  blogId: string;
}

interface BlogData {
  _id: string;
  title: string;
  tags: string[];
  coverImage: string;
  text: string;
}

const SingleBlog: React.FC<SingleBlogProps> = ({ blogId }) => {
  const [blogData, setBlogData] = useState<BlogData | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          `https://tonmoy-portfolio-server.vercel.app/api/blog/${blogId}`,
        );
        if (response.ok) {
          const data = await response.json();
          setBlogData(data?.data);
        } else {
          console.error('Failed to fetch blog data');
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [blogId]);

  if (!blogData) {
    return <div className='mt-14'>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
      {/* Hero Section */}
      <motion.div
        className="relative h-64 rounded-lg shadow-lg overflow-hidden mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={blogData.coverImage || '/images/blog-placeholder.jpg'}
          alt={blogData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        <h1 className="absolute bottom-4 left-4 text-3xl md:text-4xl font-bold text-white">
          {blogData.title}
        </h1>
      </motion.div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {blogData.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Content Section */}
      <motion.article
        className="prose lg:prose-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Blog Text */}
        <div dangerouslySetInnerHTML={{ __html: blogData.text }}></div>
      </motion.article>

      {/* Sticky Social Share */}
      <div className="fixed top-1/3 left-4 hidden lg:flex flex-col gap-4">
        {/* Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?text=${blogData.title} Visit: https://tonmoytalukder.github.io/dev/blog/${blogData._id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition"
        >
          <FiTwitter size={24} />
        </a>
        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900 transition"
        >
          <FiLinkedin size={24} />
        </a>
        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <FiFacebook size={24} />
        </a>
        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${blogData.title} Visit: https://tonmoytalukder.github.io/dev/blog/${blogData._id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700 transition"
        >
          <FaWhatsapp size={24} />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/TonmoyTalukder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition"
        >
          <FiGithub size={24} />
        </a>
      </div>
    </div>
  );
};

export default SingleBlog;
