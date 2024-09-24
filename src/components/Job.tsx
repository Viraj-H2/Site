import { Accordion, Card, Badge } from 'react-bootstrap';

interface JobProps {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export default function Job({ id, title, department, location, type, description, requirements }: JobProps) {
  return (
    <Accordion.Item eventKey={id.toString()}>
      <Accordion.Header>
        <div className='d-flex w-100 justify-content-between align-items-center'>
          <h5 className='mb-0'>{title}</h5>
          <div>
            <Badge bg='secondary' className='me-2'>{type}</Badge>
            <small>{location}</small>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <Card>
          <Card.Body>
            <Card.Title>Département</Card.Title>
            <Card.Text>{department}</Card.Text>
            <Card.Title>Description du poste</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Title>Prérequis</Card.Title>
            <ul>
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Accordion.Body>
    </Accordion.Item>
  );
};
