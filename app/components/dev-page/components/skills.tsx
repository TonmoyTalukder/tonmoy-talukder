'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '../lib/hooks';
import SectionHeading from './section-heading';
import { Spinner } from '@nextui-org/spinner';

interface ISkill {
  _id?: string;
  name: string;
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  const [skillsData, setSkillsData] = useState<ISkill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(
          'https://tonmoy-portfolio-server.vercel.app/api/skill',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch skills data');
        }
        const data = await response.json();
        setSkillsData(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spinner className="text-sky-600" size="lg" />
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border borderBlack rounded-xl px-5 py-3 hover:bg-gradient-to-br from-transparent to-sky-100 hover:shadow-lg"
            key={skill._id || index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
