import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TeamMember from './components/TeamMember';
import { Link } from 'react-router-dom';

interface TeamMemberData {
  photo: string;
  name: string;
  position: string;
  linkedin?: string;
}

interface TeamSection {
  sectionTitle: string;
  members: TeamMemberData[];
}

export default function Team() {
  const [teamSections, setTeamSections] = useState<TeamSection[]>([]);

  useEffect(() => {
    fetch('/team/data.json')
      .then(response => response.json())
      .then(data => setTeamSections(data));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          {teamSections.map((section, sectionIndex) => (
            <Row key={sectionIndex} className='m-5'>
              <Col className='border-top'>
                <h2 className='m-4 text-center justify-content-center'>{section.sectionTitle}</h2>
                <Row className='justify-content-evenly'>
                  {section.members.map((member, memberIndex) => (
                    <TeamMember key={memberIndex} {...member} />
                  ))}
                </Row>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
      <Row className='m-5'>
        <Col className='border-top text-center justify-content-center'>
          <h2 className='m-4'>Nous rejoindre</h2>
          <p className='m-4'>Rejoindre notre équipe, c'est s'impliquer dans la création de nouvelles solutions de propulsion et relever les défis techniques de demain. Nous proposons un environnement de travail dynamique et collaboratif, où chaque talent joue un rôle essentiel.</p>
          <p className='m-4'>Ensemble, construisons l'avenir de la mobilité aérienne.</p>
          <Link to="/careers" >
            <Button size='lg'>
              Postuler maintenant
            </Button>
          </Link >
        </Col>
      </Row>
    </Container>
  );
}
