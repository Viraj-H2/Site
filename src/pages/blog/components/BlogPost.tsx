import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';
import Markdown from 'react-markdown';

interface Post {
  id: string;
  title: string;
  description: string;
  preview: string;
  authors: string[];
  category: string;
  tags: string[];
  date: string;
  content: string;
}

const BlogPost: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchPost();
  }, [title]);

  const fetchPost = async () => {
    try {
      const response = await fetch('/json/posts.json');
      const data = await response.json();
      const foundPost = data.posts.find((p: Post) => 
        p.title.toLowerCase().replace(/\s+/g, '-') === title
      );
      
      if (foundPost) {
        setPost(foundPost);
        const contentResponse = await fetch(`/md/${foundPost.content}`);
        const contentText = await contentResponse.text();
        setContent(contentText);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  if (!post) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col>
          <h1>{post.title}</h1>
          <p>
            <small className='text-muted'>
              {post.authors.join(', ')} | {post.date} | {post.category}
            </small>
          </p>
          <Image src={post.preview} fluid className='mb-4' />
          <Markdown>{content}</Markdown>
          <div className='mt-4'>
            <strong>Tags: </strong>
            {post.tags.join(', ')}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPost;
