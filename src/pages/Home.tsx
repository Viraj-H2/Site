import { faBolt, faCoins, faDroplet, faFeather } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import SystemProps from '../components/SystemProp';

export default function Home() {
  const [sponsors, setSponsors] = useState<string[]>([]);

  useEffect(() => {
    fetch('/assets/json/sponsors.json')
      .then(response => response.json())
      .then(data => setSponsors(data));
  }, []);

  const scrollToConcept = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const concept = document.getElementById('concept');
    if (concept) {
      concept.scrollIntoView({ behavior: 'smooth' });
    }
  }

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
              <Button as="a" href="#concept" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => scrollToConcept(e)} className='mt-2'>Découvrir notre concept</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row id='concept' className='m-1 p-5'>
        <Col className='border-top' />
      </Row>
      <Row className='mb-5'>
        <Col className='text-center justify-content-evenly'>
          <Image src='/assets/images/concept.png' className='img-fluid w-75' alt='Concept' />
        </Col>
      </Row>
      <Row>
        <SystemProps icon={faBolt} title='Efficace' description="En plus de l'adéquation de la turbine ou de la pile en fonction des phases de vol, la récupération de vapeur et chaleur dope l'efficacité" />
        <SystemProps icon={faFeather} title='Léger' description="Une densité de puissance améliorée grâce à la synergie entre pile à combustible et turboprop" />
        <SystemProps icon={faDroplet} title='Propre' description="L'injection de vapeur réduit jusqu'à dix fois les émissions de NOx, oxydes d'azote qui participent au forçage radiatif" />
        <SystemProps icon={faCoins} title='Economique' description="L'hybridation permettra d'emporter moins d'hydrogène, ce qui diminue le coût de sa consommation et libère de la place pour plus de passagers" />
      </Row>
      <Row id='sponsors' className='m-5'>
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
