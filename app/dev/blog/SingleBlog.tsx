// app/dev/blog/SingleBlog.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { FiTwitter, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

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
    return <div className="mt-14 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
      {/* Hero Section */}
      <motion.div
        className="relative h-64 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden mb-8"
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
        <h1 className="absolute bottom-4 left-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
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
        className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div dangerouslySetInnerHTML={{ __html: blogData.text }}></div>
      </motion.article>

      {/* Social Share */}
      <div className="fixed top-1/3 left-4 hidden lg:flex flex-col gap-4">
        {[
          {
            href: `https://twitter.com/intent/tweet?text=${blogData.title}&url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            icon: <FiTwitter size={24} />,
            color: 'text-blue-500 hover:text-blue-700',
          },
          {
            href: `https://www.linkedin.com/sharing/share-offsite/?url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            icon: <FiLinkedin size={24} />,
            color: 'text-blue-700 hover:text-blue-900',
          },
          {
            href: `https://www.facebook.com/sharer/sharer.php?u=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            icon: <FiFacebook size={24} />,
            color: 'text-blue-600 hover:text-blue-800',
          },
          {
            href: `https://api.whatsapp.com/send?text=${blogData.title}&url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            icon: <FaWhatsapp size={24} />,
            color: 'text-green-500 hover:text-green-700',
          },
          {
            href: `https://github.com/TonmoyTalukder`,
            icon: <FiGithub size={24} />,
            color: 'text-gray-600 hover:text-black',
          },
        ].map(({ href, icon, color }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${color} transition`}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Mobile Social Share */}
      <div className="fixed top-1/3 left-4 hidden lg:flex flex-col gap-4">
        {[
          {
            Icon: FiTwitter,
            href: `https://twitter.com/intent/tweet?text=${blogData.title}&url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            color: 'text-blue-500 hover:text-blue-700',
            label: 'Share on Twitter',
          },
          {
            Icon: FiLinkedin,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            color: 'text-blue-700 hover:text-blue-900',
            label: 'Share on LinkedIn',
          },
          {
            Icon: FiFacebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            color: 'text-blue-600 hover:text-blue-800',
            label: 'Share on Facebook',
          },
          {
            Icon: FaWhatsapp,
            href: `https://api.whatsapp.com/send?text=${blogData.title}&url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            color: 'text-green-500 hover:text-green-700',
            label: 'Share on WhatsApp',
          },
          {
            Icon: FiGithub,
            href: `https://github.com/TonmoyTalukder`,
            color: 'text-gray-600 hover:text-black',
            label: 'Visit GitHub',
          },
        ].map(({ Icon, href, color, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${color} p-2 rounded-full hover:shadow-lg transition`}
          >
            <Icon size={32} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SingleBlog;
