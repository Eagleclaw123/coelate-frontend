import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WordPressPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://public-api.wordpress.com/wp/v2/sites/pavansai123456789.wordpress.com/posts' // _embed includes featured images
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title.rendered}</h2>
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <img 
              src={post._embedded['wp:featuredmedia'][0].source_url} 
              alt={post.title.rendered} 
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <a href={`/blog/${post.slug}`}>Read More</a>
        </div>
      ))}
    </div>
  );
};

export default WordPressPosts;