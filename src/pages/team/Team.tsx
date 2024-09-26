import { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TeamMember from './components/TeamMember';

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
    fetch('/team/team.json')
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
          <p className='m-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium euismod ligula. Fusce pretium interdum nisi, et malesuada enim congue ac. Proin eget eros vel risus porttitor vestibulum eget et enim. Ut pretium tellus nisi, a elementum dui blandit eget. Donec ornare pretium nunc a interdum. Fusce est dolor, finibus non purus vitae, egestas interdum augue. Duis non consectetur leo. Curabitur placerat luctus magna consectetur egestas.</p>
          <Button as='a' href='/careers' size='lg'>Postuler maintenant</Button>
        </Col>
      </Row>
    </Container>
  );
}
