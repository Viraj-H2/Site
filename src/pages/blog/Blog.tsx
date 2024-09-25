import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);

  useEffect(() => {
    fetch('/assets/json/posts.json')
      .then(response => response.json())
      .then((data: Post[]) => {
        setPosts(data);
        setCategories([...new Set(data.map(post => post.category))]);
        setTags([...new Set(data.flatMap(post => post.tags))]);
        setAuthors([...new Set(data.flatMap(post => post.authors))]);
      });
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, selectedCategory, selectedTags, selectedAuthors]);

  const filterPosts = () => {
    let filtered = [...posts];
    
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (selectedTags.length > 0) {
      filtered = filtered.filter(post => selectedTags.every(tag => post.tags.includes(tag)));
    }
    
    if (selectedAuthors.length > 0) {
      filtered = filtered.filter(post => post.authors.some(author => selectedAuthors.includes(author)));
    }
    
    setFilteredPosts(filtered);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedTags(value);
  };

  const handleAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedAuthors(value);
  };

  return (
    <Container className='mt-5'>
      <h1 className='mb-4'>Blog Posts</h1>
      
      <Row className='mb-4'>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Filter by Category</Form.Label>
            <Form.Control as='select' onChange={handleCategoryChange}>
              <option value=''>All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Filter by Tags</Form.Label>
            <Form.Control as='select' multiple onChange={handleTagChange}>
              {tags.map(tag => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Filter by Authors</Form.Label>
            <Form.Control as='select' multiple onChange={handleAuthorChange}>
              {authors.map(author => (
                <option key={author} value={author}>{author}</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        {filteredPosts.map(post => (
          <Col key={post.id} md={4} className='mb-4'>
            <Card>
              <Card.Img variant='top' src={post.preview} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Card.Text>
                  <small className='text-muted'>
                    {post.authors.join(', ')} | {post.date}
                  </small>
                </Card.Text>
                <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant='primary'>Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
