import { Container, Image, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <>
    <Container fluid className='d-flex justify-content-center align-items-center vh-100 position-fixed top-0'
    >
      <video autoPlay loop muted disablePictureInPicture playsInline
        className='position-absolute w-100 h-100'
        style={{ pointerEvents: 'none', objectFit: 'cover', zIndex: 0, opacity: 0.85 }}
      >
        <source src='/mountains.mp4' type='video/mp4' />
        <img src='/mountains.png' className='position-absolute w-100 h-100' style={{ objectFit: 'cover', zIndex: 0 }} />
      </video>
      <Row className='text-center' style={{ maxWidth: '80%', zIndex: 1 }}>
        <Image src='/logo.svg' />
        <div style={{ height: '4rem' }} />
        <h1 className='text-light'>🚧 This website is under construction 🛠️</h1>
      </Row>
    </Container>
    <Container fluid className='d-flex justify-content-center align-items-center'>
      <h1 className='text-light'>This is a test heading</h1>
      <p className='text-light'>This is a test paragraph</p>
    </Container>
    </>
  )
}
