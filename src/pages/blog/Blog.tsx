import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { usePosts } from './providers/PostsProvider';

export default function Blog() {
  const { posts } = usePosts();

  if (posts.length == 0) return <Spinner animation='border' role='status' />;

  return (
    <Container className='mt-5'>
      <h1 className='mb-4'>Blog</h1>
      <Row>
        {posts.map((post, index) => (
          <Col key={index} md={4} className='mb-4'>
            <Card>
              <Card.Img variant='top' src={`/blog/${post.content_dir}/${post.preview}`} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Card.Text>
                  <small className='text-muted'>
                    {post.authors.join(', ')} | {post.date}
                  </small>
                </Card.Text>
                <Link to={`/blog/${encodeURIComponent(post.title)}`}>
                  <Button variant='primary'>Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
