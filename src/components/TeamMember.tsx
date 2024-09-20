import { Card, Col, Row } from 'react-bootstrap';

interface TeamMemberProps {
  photo: string;
  name: string;
  position: string;
  linkedin?: string;
}

export default function TeamMember({ photo, name, position, linkedin }: TeamMemberProps) {
  return (
    <Card style={{ width: '18rem' }} border='primary'>
      <Card.Img variant='top' src={'/assets/images/team/' + photo} />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{position}</Card.Text>
          </Col>
          {linkedin && (
            <Col md='auto'>
              <Card.Link href={'https://www.linkedin.com/in/' + linkedin} target='_blank'>LinkedIn</Card.Link>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
}
