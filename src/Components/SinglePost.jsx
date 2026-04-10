import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `https://pavansai123456789.wordpress.com/wp-json/wp/v2/posts'/${slug}`
        );
        setPost(response.data[0]);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="single-post">
      <h1>{post.title.rendered}</h1>
      {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
        <img 
          src={post._embedded['wp:featuredmedia'][0].source_url} 
          alt={post.title.rendered} 
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default SinglePost;