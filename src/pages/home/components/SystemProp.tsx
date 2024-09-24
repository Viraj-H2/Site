import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col } from 'react-bootstrap';

interface SystemPropsProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

export default function SystemProps({ icon, title, description }: SystemPropsProps) {
  return (
    <Col className='align-items-center text-center'>
      <Card border='primary' className='m-2'>
      <FontAwesomeIcon icon={icon} className='mt-4 display-4 text-primary' />
      <Card.Body>
        <Card.Title className='text-primary'>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
    
  </Col>
  );
}
