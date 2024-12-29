// app/dev/blog/SingleBlog.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface SingleBlogProps {
  blogId: string;
}

interface BlogData {
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
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-container">
      <h1>{blogData.title}</h1>
      <div className="tags">
        {blogData.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
      <img src={blogData.coverImage} alt={blogData.title} />
      <div
        dangerouslySetInnerHTML={{ __html: blogData.text }}
        className="blog-content"
      />
    </div>
  );
};

export default SingleBlog;
