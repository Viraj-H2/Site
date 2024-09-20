import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface ArticleProps {
  title: string;
  date: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ title, date, content }) => {
  return (
    <Container fluid>
      <Col>
        <Row>
          <h1>{title}</h1>
          <h2>{date}</h2>
        </Row>
        <p>{content}</p>
      </Col>
    </Container>
  );
};

export default Article;
