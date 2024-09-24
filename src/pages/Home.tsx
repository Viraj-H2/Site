import { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

export default function Home() {
  const [sponsors, setSponsors] = useState<string[]>([]);

  useEffect(() => {
    fetch('/assets/json/sponsors.json')
      .then(response => response.json())
      .then(data => setSponsors(data));
  }, []);

  return (
    <Container fluid className='p-0'>
      <Row className='m-0'>
        <Col className='p-0'>
          <video autoPlay loop muted disablePictureInPicture playsInline className='w-100 vh-100' style={{ pointerEvents: 'none', objectFit: 'cover', opacity: 0.85 }}>
            <source src='/assets/videos/background.mp4' type='video/mp4' />
            <Image src='/assets/images/background.png' className='img-fluid vw-100 vh-100' style={{ objectFit: 'cover' }} />
          </video>
          <Row className='m-0'>
            <Col className='dflex position-absolute top-50 start-50 translate-middle text-center'>
              <Image src='/assets/images/logo.svg' alt='Logo' className='img-fluid w-75 mb-4' />
              <h1 className='text-light mb-4'>Accélérons la décarbonation de l'aérien</h1>
              <Button href='/concept' className='mt-2'>Découvrir notre concept</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row key='#sponsors' className='m-5'>
        <Col className='border-top'>
        <h2 className='text-center justify-content-center m-5'>Ils nous soutiennent</h2>
        <Row className='justify-content-evenly'>
          {sponsors.map((sponsor, index) => (
            <Col key={index} xs={4} md={2} className='text-center'>
              <img src={`/assets/images/sponsors/${sponsor}`} alt={sponsor} className='img-fluid' />
            </Col>
          ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
