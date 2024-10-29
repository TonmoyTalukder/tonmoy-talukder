"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { projectsData } from "../lib/data";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  frontend,
  backend,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-5 sm:mb-10 last:mb-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <section
        className={`bg-gradient-to-br from-transparent to-sky-100 shadow-xl max-w-[42rem] border border-black/10 rounded-lg overflow-hidden sm:pr-8 relative sm:h-auto hover:bg-gradient-to-br hover:from-transparent hover:to-slate-300 transition sm:group-even:pl-8 ${
          isExpanded ? "h-auto" : ""
        }`}
      >
        <div className="pt-6 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <Link href={link} target="_blank">
            <h3 className="text-2xl font-semibold text-sky-700 hover:underline transition">
              {title}
            </h3>
          </Link>
          <div
            className={`mt-2 leading-relaxed text-gray-700 ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {description}
          </div>
          {description.length > 100 && (
            <button
              onClick={toggleExpand}
              className="mt-2 text-sky-600 text-sm font-normal hover:underline text-left"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}

          <div className="flex flex-col items-left gap-1 my-2">
            <Link href={frontend} target="_blank">
              <p className="text-base font-semibold flex items-center gap-2 text-sky-700 hover:underline">
                <FaGithub size={16} />
                Frontend Repository
              </p>
            </Link>
            <Link href={backend} target="_blank">
              <p className="text-base font-semibold flex items-center gap-2 text-sky-700 hover:underline">
                <FaGithub size={16} />
                Backend Repository
              </p>
            </Link>
          </div>
          <ul className="flex flex-wrap gap-2 mt-6 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.8rem] uppercase tracking-wider text-white rounded-full flex-grow text-center"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width="192"
          height="192"
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl
          transition-transform
          duration-300
          group-hover:scale-[1.05]
          group-hover:-translate-x-4
          group-hover:translate-y-4
          group-hover:-rotate-3
          group-even:group-hover:translate-x-4
          group-even:group-hover:rotate-3
          group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
