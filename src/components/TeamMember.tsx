import { Card, Col, Row } from 'react-bootstrap';

interface TeamMemberProps {
  photo: string;
  name: string;
  position: string;
  linkedin?: string;
}

export default function TeamMember({ photo, name, position, linkedin }: TeamMemberProps) {
  return (
    <Card border='0' style={{ width: '18rem' }}>
      <Card.Img
        variant='top'
        src={'/assets/images/team/' + photo}
        className='rounded-circle border border-2 mt-3'
      />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{position}</Card.Text>
          </Col>
          {linkedin && (
            <Col className='d-flex align-items-center' xs='auto'>
              <Card.Link href={'https://www.linkedin.com/in/' + linkedin} target='_blank'>
                <img src='/assets/icons/linkedin.svg' alt='LinkedIn' width='32' height='32' />
              </Card.Link>
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
}
