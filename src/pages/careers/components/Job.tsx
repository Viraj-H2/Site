import { useState, useEffect, useRef } from 'react';
import { Accordion, Card, Badge, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faShareAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ContactEmail from '../../../common/components/ContactEmail';

interface JobProps {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  helloworkLink?: string;
  indeedLink?: string;
  linkedinLink?: string;
}

export default function Job({ 
  id, 
  title, 
  department, 
  location, 
  type, 
  description, 
  requirements,
  helloworkLink,
  indeedLink,
  linkedinLink
}: JobProps) {
  const [linkCopied, setLinkCopied] = useState(false);
  const jobRef = useRef<HTMLDivElement>(null);

  const shareUrl = `${window.location.origin}/careers#${id}`;

  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    });
  };

  useEffect(() => {
    if (window.location.hash === `#${id}` && jobRef.current) {
      jobRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  return (
    <div ref={jobRef}>
      <Accordion.Item eventKey={id.toString()}>
        <Accordion.Header>
          <div className='d-flex w-100 justify-content-between align-items-center'>
            <h5 className='mb-0'>{title}</h5>
            <div>
              <Badge bg='secondary' className='me-2'>{type}</Badge>
              <small className='p-2'>{location}</small>
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
              <Card.Title>Postuler</Card.Title>
              <div className="d-flex gap-2 mb-3">
                {helloworkLink && (
                  <Button variant="outline-primary" href={helloworkLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLink} className="me-2" />
                    Hellowork
                  </Button>
                )}
                {indeedLink && (
                  <Button variant="outline-primary" href={indeedLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLink} className="me-2" />
                    Indeed
                  </Button>
                )}
                {linkedinLink && (
                  <Button variant="outline-primary" href={linkedinLink} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                    LinkedIn
                  </Button>
                )}
                {!helloworkLink && !indeedLink && !linkedinLink && (
                  <p>
                    Pour candidater, envoyez-nous un mail à <ContactEmail /> avec votre CV ainsi qu'une lettre de motivation.
                  </p>
                )}
              </div>
              <Card.Title>Partager</Card.Title>
              <div className="d-flex gap-2 align-items-center">
                <Button 
                  variant={linkCopied ? "outline-success" : "outline-secondary"} 
                  onClick={handleShare}
                >
                  <FontAwesomeIcon icon={linkCopied ? faCheck : faShareAlt} className="me-2" />
                  {linkCopied ? "Lien copié !" : "Copier le lien"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}
