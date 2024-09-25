import { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Spinner, Alert } from 'react-bootstrap';
import Markdown from 'react-markdown';
import Post from '../interfaces/Post';

export default function BlogPost() {
  const [post, setPost] = useState<Post | null>(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const encodedTitle = window.location.pathname.split('/').pop();
    if (!encodedTitle)
      return;
    const targetTitle = decodeURIComponent(encodedTitle);
    fetch('/assets/json/posts.json')
      .then(response => response.json())
      .then((data: Post[]) => {
        const targetPost = data.find(post => post.title === targetTitle);
        if (targetPost) {
          setPost(targetPost);
          fetch(`/assets/md/${targetPost.content}`)
            .then(response => response.text())
            .then(data => setContent(data));
        }
      });
  }, []);

  if (!post)
    return (
      <Container className='text-center'>
        <Spinner animation='border' role='status' />
      </Container>
    );

  if (!content)
    return (
      <Container className='text-center'>
        <Alert variant='danger'>Failed to load post content</Alert>
      </Container>
    );

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
