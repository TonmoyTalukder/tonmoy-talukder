// app/dev/blog/[blogId]/page.tsx

import React from 'react';
import SingleBlog from '../SingleBlog';

interface BlogData {
  _id: string;
  title: string;
  tags: string[];
  coverImage: string;
  text: string;
}
interface BlogProps {
  params: {
    blogId: string;
  };
}

export default function BlogPage({ params }: BlogProps) {
  const { blogId } = params;

  return <SingleBlog blogId={blogId} />;
}

// Add predefining static paths for a dynamic route
export async function generateStaticParams() {
  const response = await fetch(
    'https://tonmoy-portfolio-server.vercel.app/api/blog',
  );
  const blogsData = await response.json();

  const blogs: BlogData[] = blogsData?.data || [];

  // console.log(
  //   'return arrary = ',
  //   blogs.map((blog) => ({ blogId: blog._id })),
  // );

  // return [{ blogId: '1' }, { blogId: '2' }];
  return blogs.map((blog) => ({ blogId: blog._id }));
}
