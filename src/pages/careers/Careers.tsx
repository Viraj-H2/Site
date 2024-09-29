import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Accordion } from 'react-bootstrap';
import Job from './components/Job';
import { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext';

interface JobType {
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

export default function Careers() {
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobType[]>([]);
  const [departments, setDepartments] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    department: '',
    location: '',
    type: '',
  });
  const [activeKey, setActiveKey] = useState<AccordionEventKey | null>(null);

  useEffect(() => {
    fetch('/careers/data.json')
      .then(response => response.json())
      .then((data: JobType[]) => {
        setJobs(data.sort((a, b) => a.title.localeCompare(b.title)));
        setFilteredJobs(data);
        setDepartments([...new Set(data.map(job => job.department))].sort());
        setLocations([...new Set(data.map(job => job.location))].sort());
        setTypes([...new Set(data.map(job => job.type))].sort());
      });
  }, []);

  useEffect(() => {
    const filtered = jobs.filter(job => 
      (filters.department === '' || job.department === filters.department) &&
      (filters.location === '' || job.location === filters.location) &&
      (filters.type === '' || job.type === filters.type)
    );
    setFilteredJobs(filtered);
  }, [filters, jobs]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveKey(hash);
      } else {
        setActiveKey(null);
      }
    };

    // Handle initial load
    handleHashChange();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleAccordionToggle = (eventKey: AccordionEventKey) => {
    if (eventKey === activeKey) {
      // If the same item is clicked, close it
      setActiveKey(null);
      window.history.pushState(null, '', '/careers');
    } else {
      setActiveKey(eventKey);
      if (eventKey) {
        window.history.pushState(null, '', `/careers#${eventKey}`);
      }
    }
  };

  return (
    <Container fluid>
      <Row className='my-4'>
        <Col className='text-center'>
          <h1>Offres d'emploi</h1>
          <p className='info'>
            Découvrez les opportunités de carrière chez Viraj H2. Utilisez les filtres ci-dessous pour affiner votre recherche.
          </p>
        </Col>
      </Row>

      <Row className='mb-4'>
        <Col md={4}>
          <Form.Select name='department' onChange={handleFilterChange}>
            <option value=''>Tous les départements</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select name='location' onChange={handleFilterChange}>
            <option value=''>Toutes les localisations</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select name='type' onChange={handleFilterChange}>
            <option value=''>Tous les types de contrat</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row className='mb-4'>
        <Accordion activeKey={activeKey} onSelect={handleAccordionToggle}>
          {filteredJobs.map(job => (
            <Job key={job.id} {...job} />
          ))}
        </Accordion>
      </Row>
    </Container>
  );
}
