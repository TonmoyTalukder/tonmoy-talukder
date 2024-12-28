'use client';

import React, { useEffect, useState } from 'react';
import { Spinner } from '@nextui-org/spinner';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/app/components/dev-page/components/section-heading';
import Blog from '@/app/components/dev-page/components/blog';

type BlogData = {
  _id: string;
  title: string;
  tags: string[];
  coverImage: string;
  text: string;
};

export default function AllBlogs() {
  const [blogsData, setBlogsData] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          'https://tonmoy-portfolio-server.vercel.app/api/blog',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch blogs data');
        }
        const data = await response.json();
        setBlogsData(data?.data || []);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="text-sky-600" size="lg" />
      </div>
    );

  if (error) return <p className="text-red-600 text-center">Error: {error}</p>;

  return (
    <div className="min-h-screen py-10 my-12">
      <motion.div
        className="text-center mb-10 mt-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeading>My All Blogs</SectionHeading>
        <p className="text-gray-600 mt-[-2]">
          Explore a collection of insightful blogs
        </p>
      </motion.div>
      <div>
        {[...blogsData].reverse().map((blog) => (
          <React.Fragment key={blog._id}>
            <Blog {...blog} />
          </React.Fragment>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {blogsData.map((blog) => (
          <motion.div
            key={blog._id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 hover:text-sky-600 cursor-pointer">
                <Link
                  href={`/dev/blog/${blog._id}`}
                  className="group bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-500 text-white px-6 py-2 flex items-center gap-2 rounded-full hover:bg-sky-700 transition"
                >
                  {blog.title}
                </Link>
              </h2>
              <p className="text-gray-600 mt-2 text-sm">
                {blog.text.substring(0, 100)}...
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-sky-100 text-sky-600 text-xs font-medium py-1 px-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}
    </div>
  );
}
