'use client';

import React, { useEffect, useState } from 'react';
import SectionHeading from './section-heading';
import Blog from './blog';
import { useSectionInView } from '../lib/hooks';
import { motion } from 'framer-motion';
import { Spinner } from '@nextui-org/spinner';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

type BlogData = {
  _id: string;
  title: string;
  tags: string[];
  coverImage: string;
  text: string;
};

export default function Blogs() {
  const { ref } = useSectionInView('Blogs', 0.5);

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
      <div className="flex items-center justify-center">
        <Spinner className="text-sky-600" size="lg" />
      </div>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <motion.section
      ref={ref}
      id="blogs"
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{ marginTop: '2vh' }}
    >
      <SectionHeading>My Blogs</SectionHeading>
      <div>
        {[...blogsData]
          .reverse()
          .slice(0, 3)
          .map((blog) => (
            <React.Fragment key={blog._id}>
              <Blog {...blog} />
            </React.Fragment>
          ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href={`/dev/all-blogs`}
          className="group bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-500 text-white px-6 py-2 flex items-center gap-2 rounded-full hover:bg-sky-700 transition"
        >
          View All Blogs{' '}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </motion.section>
  );
}
