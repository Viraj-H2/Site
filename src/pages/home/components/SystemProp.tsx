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
    <Col xs={12} sm={6} md={4} lg={3} className='d-flex align-items-stretch' style={{ minWidth: '250px' }}>
      <Card border='primary' className='m-2 w-100 text-center'>
        <Card.Body className='d-flex flex-column'>
          <FontAwesomeIcon icon={icon} className='mt-2 mb-3 display-4 text-primary' />
          <Card.Title className='text-primary'>{title}</Card.Title>
          <Card.Text className='flex-grow-1'>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
