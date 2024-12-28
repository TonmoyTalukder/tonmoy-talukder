'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

type BlogProps = {
  _id: string;
  title: string;
  tags: string[];
  coverImage: string;
};

export default function Blog({ _id, title, tags, coverImage }: BlogProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Framer Motion Scroll Effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.8 1', '1 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="relative group mb-10 sm:mb-14 max-w-[420px] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Cover Image */}
      <div className="relative w-full h-56">
        <Image
          src={coverImage}
          alt={`${title} cover image`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Blog Content */}
      <div className="bg-white p-6 flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors">
          {title}
        </h3>

        {/* Tags */}
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-sky-100 text-sky-700 px-3 py-1 text-sm rounded-full font-medium uppercase tracking-wide shadow-sm"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Read Blog Button */}
        <Link
          href={`/dev/blog/${_id}`}
          className="inline-flex items-center justify-center bg-sky-600 text-white px-5 py-2 text-sm font-medium rounded-full shadow-md hover:shadow-lg hover:bg-sky-700 transition-transform transform hover:scale-105"
        >
          Read Blog
        </Link>
      </div>
    </motion.div>
  );
}
