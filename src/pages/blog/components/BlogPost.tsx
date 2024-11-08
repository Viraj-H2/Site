import { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Markdown from 'react-markdown';
import Post from '../interfaces/Post';
import { usePosts } from '../providers/PostsProvider';
import Error404 from '../../Error404';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { posts } = usePosts();
  const { title } = useParams()
  const [post, setPost] = useState<Post | null>(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!title) return;
    const targetPost = posts.find(post => post.title === title);
    if (targetPost) {
      setPost(targetPost);
      fetch(`/blog/${targetPost.content_dir}/post.md`)
        .then(response => {
          if (response.headers.get('content-type')?.includes('text/html'))
            return '';
          return response.text();
        })
        .then(data => setContent(data))
        .catch(error => console.error(error));
    }
  }, [posts]);

  if (!post || !content) return <Error404 />;

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
          <Markdown
            components={{
              img: ({ node, ...props }) => <Image {...props} fluid />
            }}>{content}</Markdown>
          <div className='mt-4'>
            <strong>Tags: </strong>
            {post.tags.join(', ')}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
