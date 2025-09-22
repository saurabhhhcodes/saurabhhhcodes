import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const projects = [
  {
    id: 1,
    name: "OpenBioGen-AI - AI-Powered Bioinformatics Platform",
    html_url: "https://github.com/saurabhhhcodes/openbiogen-ai",
    description: "Revolutionary AI-driven platform for genomic analysis and drug discovery. Tech Stack: Python, LangChain, OpenAI GPT-4, React, FastAPI, PostgreSQL, Redis",
  },
  {
    id: 2,
    name: "GeneInsight Platform - Advanced Bioinformatics Analysis",
    html_url: "https://github.com/saurabhhhcodes/geneinsight-platform",
    description: "Comprehensive bioinformatics platform for genetic data analysis and visualization. Tech Stack: Python, React, FastAPI, PostgreSQL, Docker, LangChain",
  },
  {
    id: 3,
    name: "Sequence Analysis Tool - DNA/RNA Processing Suite",
    html_url: "https://github.com/saurabhhhcodes/sequence-analysis-tool",
    description: "Comprehensive toolkit for biological sequence analysis and manipulation. Tech Stack: Python, BioPython, NumPy, Matplotlib, LangChain, OpenAI",
  },
  {
    id: 4,
    name: "Secure Agent Scheduler - Secure Task Scheduling",
    html_url: "https://github.com/saurabhhhcodes/secure-agent-scheduler",
    description: "A secure and reliable task scheduler for autonomous agents. Tech Stack: Python, FastAPI, Docker, Kubernetes",
  },
  {
    id: 5,
    name: "Smart Plant Care Assistant - Automated Plant Monitoring",
    html_url: "https://github.com/saurabhhhcodes/smart-plant-care-assistant",
    description: "An IoT-based system for monitoring and watering plants automatically. Tech Stack: Python, Flask, Raspberry Pi, Arduino, MQTT",
  },
];

const Projects: React.FC = () => {
  return (
    <Row>
      {projects.map((repo, index) => (
        <Col key={repo.id} md={6} className="mb-4">
          <Fade delay={index * 100}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Card>
                <Card.Body>
                  <Card.Title>{repo.name}</Card.Title>
                  <Card.Text>{repo.description}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Fade>
        </Col>
      ))}
    </Row>
  );
}

export default Projects;