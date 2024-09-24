import { Col, Container } from 'react-bootstrap';

export default function Press() {
  return (
    <Container fluid>
      <Col className='text-center justify-content-center'>
        <h1>Ils parlent de nous</h1>
        <p className='info'>
          Cette section regroupe une sélection d'articles de presse et de publications sur notre entreprise.
        </p>
      </Col>
    </Container>
  );
}
