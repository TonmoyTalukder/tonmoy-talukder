'use client';

import React, { useEffect, useState } from 'react';
import { FiTwitter, FiLinkedin, FiGithub, FiFacebook } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { CodeSnippet } from '@/app/components/dev-page/components/CodeSnippet';

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

  const addLineGapsToParagraphs = (html: string): string => {
    return html.replace(
      /<\/p>/g,
      `</p><div style="padding-top: 5px; height: 10px; width: 10px;"></div>`,
    );
  };

  const parseBlogContent = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elements: React.ReactNode[] = [];

    doc.body.childNodes.forEach((node) => {
      if (node.nodeName === 'PRE' && node.firstChild?.nodeName === 'CODE') {
        const code = node.textContent || '';
        elements.push(<CodeSnippet key={elements.length} code={code} />);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        elements.push(
          <div
            key={elements.length}
            dangerouslySetInnerHTML={{ __html: element.outerHTML }}
          ></div>,
        );
      } else if (node.nodeType === Node.TEXT_NODE) {
        elements.push(<div key={elements.length}>{node.textContent}</div>);
      }
    });

    return elements;
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          `https://tonmoy-portfolio-server.vercel.app/api/blog/${blogId}`,
        );
        if (response.ok) {
          const data = await response.json();

          let blogText = data?.data.text || '';
          blogText = addLineGapsToParagraphs(blogText);

          setBlogData({ ...data?.data, text: blogText });
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
    <div
      className="mt-16 px-4 md:px-8"
      style={{
        height: '100%',
        maxWidth: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Hero Section */}
      <motion.div
        className="relative max-w-full-md w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden mb-8 mx-auto"
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
            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-200 transition"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Content Section */}
      <motion.article
        className="w-full max-w-screen-md prose prose-sm sm:prose md:prose-lg lg:prose-xl"
        style={{
          overflowWrap: 'break-word',
          whiteSpace: 'normal',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <div
          dangerouslySetInnerHTML={{
            __html: blogData.text,
          }}
          style={{
            width: '100%',
          }}
        ></div> */}
        {parseBlogContent(blogData.text)}
        {/* <style jsx>{`
          pre {
            background-color: #f4f4f4;
            padding: 16px;
            border-radius: 8px;
            overflow-x: auto;
            white-space: pre-wrap;
          }
          code {
            font-family: 'Courier New', Courier, monospace;
            background-color: rgba(27, 31, 35, 0.05);
            padding: 2px 4px;
            border-radius: 4px;
          }
        `}</style> */}
      </motion.article>

      {/* Social Share - Fixed for Larger Screens */}
      <div className="hidden lg:flex lg:flex-col fixed top-1/3 left-4 gap-4">
        {[
          {
            href: `https://twitter.com/intent/tweet?text=${blogData.title}&url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            Icon: FiTwitter,
            color: 'text-blue-500 hover:text-blue-700',
            label: 'Share on Twitter',
          },
          {
            href: `https://www.linkedin.com/sharing/share-offsite/?url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            Icon: FiLinkedin,
            color: 'text-blue-700 hover:text-blue-900',
            label: 'Share on LinkedIn',
          },
          {
            href: `https://www.facebook.com/sharer/sharer.php?u=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            Icon: FiFacebook,
            color: 'text-blue-600 hover:text-blue-800',
            label: 'Share on Facebook',
          },
          {
            href: `https://api.whatsapp.com/send?text=${blogData.title}&url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
            Icon: FaWhatsapp,
            color: 'text-green-500 hover:text-green-700',
            label: 'Share on WhatsApp',
          },
          {
            href: `https://github.com/TonmoyTalukder`,
            Icon: FiGithub,
            color: 'text-gray-600 hover:text-black',
            label: 'Visit GitHub',
          },
        ].map(({ href, Icon, color, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${color} p-2 rounded-full hover:shadow-md transition`}
          >
            <Icon size={28} />
          </a>
        ))}
      </div>

      {/* Social Share - At Footer for Smaller and Medium Screens */}
      <div className="my-12 md:my-16">
        <h2 className="text-center text-xl font-semibold mb-4">Share</h2>
        <div className="flex justify-center gap-4">
          {[
            {
              href: `https://twitter.com/intent/tweet?text=${blogData.title}&url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
              Icon: FiTwitter,
              color: 'text-blue-500 hover:text-blue-700',
              label: 'Share on Twitter',
            },
            {
              href: `https://www.linkedin.com/sharing/share-offsite/?url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
              Icon: FiLinkedin,
              color: 'text-blue-700 hover:text-blue-900',
              label: 'Share on LinkedIn',
            },
            {
              href: `https://www.facebook.com/sharer/sharer.php?u=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
              Icon: FiFacebook,
              color: 'text-blue-600 hover:text-blue-800',
              label: 'Share on Facebook',
            },
            {
              href: `https://api.whatsapp.com/send?text=${blogData.title}&url=https://tonmoytalukder.github.io/dev/blog/${blogData._id}`,
              Icon: FaWhatsapp,
              color: 'text-green-500 hover:text-green-700',
              label: 'Share on WhatsApp',
            },
            {
              href: `https://github.com/TonmoyTalukder`,
              Icon: FiGithub,
              color: 'text-gray-600 hover:text-black',
              label: 'Visit GitHub',
            },
          ].map(({ href, Icon, color, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`${color} p-2 rounded-full hover:shadow-md transition`}
            >
              <Icon size={28} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
