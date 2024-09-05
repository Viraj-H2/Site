import { Container, Toast } from "react-bootstrap";

export default function Layout() {
  return (
    <Container
      fluid
      className="min-vh-100 d-flex flex-column"// justify-content-center align-items-center"
      style={{ backgroundColor: 'rgba(0, 255, 0, 0.5)' }}
    >
      <h1>🚧 Layout 🛠️</h1>
      <Toast>
        <Toast.Header>
          <img className="rounded me-2" />
          <strong className="me-auto">Toast Title</strong>
          <small>42 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, Toast!</Toast.Body>
      </Toast>
    </Container>
  );
}
