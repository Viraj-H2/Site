import { Container, Image } from 'react-bootstrap';

export default function Error404() {
  return (
    <Container fluid className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <Image src='/assets/images/404.png' className='img-fluid' style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </Container>
  );
}
