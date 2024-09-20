import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMember from '../components/TeamMember';

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

export default function About() {
  const [teamSections, setTeamSections] = useState<TeamSection[]>([]);

  useEffect(() => {
    fetch('/assets/json/team.json')
      .then(response => response.json())
      .then(data => setTeamSections(data));
  }, []);

  return (
    <Container fluid>
      <Row className=''>
        <Col>
        {teamSections.map((section, sectionIndex) => (
          <Row key={sectionIndex} className='m-5'>
            <Col className='border-top'>
              <h2 className='text-center justify-content-center m-5'>{section.sectionTitle}</h2>
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
    </Container>
  );
}
