import { Button, Form, Stack, Toast } from 'react-bootstrap';

export default function Theme() {
  return (
    <Stack>
      <Stack direction='horizontal' gap={1}>
        <Button variant='primary'>Primary</Button>{' '}
        <Button variant='secondary'>Secondary</Button>{' '}
        <Button variant='success'>Success</Button>{' '}
        <Button variant='warning'>Warning</Button>{' '}
        <Button variant='danger'>Danger</Button>{' '}
        <Button variant='info'>Info</Button>{' '}
        <Button variant='light'>Light</Button>{' '}
        <Button variant='dark'>Dark</Button>
        <Button variant='link'>Link</Button>
      </Stack>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Toast Title</strong>
          <small>42 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, Toast!</Toast.Body>
      </Toast>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Stack>
  );
}
