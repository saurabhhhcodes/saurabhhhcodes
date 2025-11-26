import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectCard from './components/ProjectCard';
import projectsData from './data/projects.json';

const Projects: React.FC = () => {
  return (
    <Row>
      {projectsData.map((project) => (
        <Col key={project.id} md={6} lg={4} className="mb-4">
          <ProjectCard project={project} />
        </Col>
      ))}
    </Row>
  );
}

export default Projects;