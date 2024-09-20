import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className='py-5'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs={6} md={2} className='mb-3'>
            <h5>Liens</h5>
            <Nav className='flex-column'>
              <Nav.Item className='mb-2'>
                <Nav.Link href='/' className='p-0 text-body-secondary'>Accueil</Nav.Link>
              </Nav.Item>
              <Nav.Item className='mb-2'>
                <Nav.Link href='/about' className='p-0 text-body-secondary'>À propos</Nav.Link>
              </Nav.Item>
              <Nav.Item className='mb-2'>
                <Nav.Link href='/concept' className='p-0 text-body-secondary'>Notre concept</Nav.Link>
              </Nav.Item>
              <Nav.Item className='mb-2'>
                <Nav.Link href='/careers' className='p-0 text-body-secondary'>Carrières</Nav.Link>
              </Nav.Item>
              <Nav.Item className='mb-2'>
                <Nav.Link href='/news' className='p-0 text-body-secondary'>Actualités</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col md={5} className='offset-md-1 mb-3'>
            <Form>
              <h5>S'inscrire à la newsletter</h5>
              <p>Recevez de nos nouvelles chaque trimestre !</p>
              <div className='d-flex flex-column flex-sm-row w-100 gap-2'>
                <Form.Control
                  type='email'
                  placeholder='Adresse email'
                  aria-label='Email address'
                  className='form-control'
                />
                <Button variant='primary' type='button'>S'inscrire</Button>
              </div>
            </Form>
          </Col>
        </Row>

        <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
          <p>Copyright &copy; Viraj H2 2024</p>
          <ul className='list-unstyled d-flex'>
            <li className='ms-3'>
              <a className='link-body-emphasis' href='#'><svg className='bi' width='24' height='24'><use xlinkHref='#linkedin'/></svg></a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
