import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Form, Accordion } from 'react-bootstrap';
import Job from '../components/Job';

interface JobType {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
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

  useEffect(() => {
    fetch('/assets/json/jobs.json')
      .then(response => response.json())
      .then((data: JobType[]) => {
        setJobs(data);
        setFilteredJobs(data);
        setDepartments([...new Set(data.map(job => job.department))]);
        setLocations([...new Set(data.map(job => job.location))]);
        setTypes([...new Set(data.map(job => job.type))]);
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

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFilters(prev => ({ ...prev, [name]: value }));
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
        <Accordion>
          {filteredJobs.map(job => (
            <Job key={job.id} {...job} />
          ))}
        </Accordion>
      </Row>
    </Container>
  );
}
