'use client';

import React, { useEffect, useState } from 'react';
import SectionHeading from './section-heading';
import Project from './project';
import { useSectionInView } from '../lib/hooks';
import { motion } from 'framer-motion';

type ProjectData = {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  frontend?: string;
  backend?: string;
};

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  const [projectsData, setProjectsData] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://tonmoy-portfolio-server.vercel.app/api/project'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch projects data');
        }
        const data = await response.json();
        setProjectsData(data?.data || []);
      } catch (err: any) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{ marginTop: '2vh' }}
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {[...projectsData].reverse().map((project) => (
          <React.Fragment key={project._id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
