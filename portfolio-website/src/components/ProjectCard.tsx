import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: rgba(26, 27, 38, 0.8);
  border: 1px solid rgba(122, 162, 247, 0.2);
  border-radius: 15px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 217, 255, 0.15);
    border-color: rgba(0, 217, 255, 0.5);
  }
`;

const Title = styled.h3`
  color: #7aa2f7;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Description = styled.p`
  color: #a9b1d6;
  font-size: 0.9rem;
  flex-grow: 1;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(122, 162, 247, 0.1);
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #565f89;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconLink = styled.a`
  color: #c0caf5;
  transition: color 0.2s;
  font-size: 1.1rem;

  &:hover {
    color: #00d9ff;
  }
`;

interface ProjectProps {
  project: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage?: string | null;
    language: string;
    stargazers_count: number;
    topics: string[];
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Title>{project.name}</Title>
      <Description>{project.description || "No description available."}</Description>

      <div className="mb-3">
        {project.topics.slice(0, 3).map(topic => (
          <span key={topic} className="badge bg-dark text-info me-1 border border-info rounded-pill" style={{ fontSize: '0.7rem', opacity: 0.8 }}>
            {topic}
          </span>
        ))}
      </div>

      <Meta>
        <TechStack>
          {project.language && (
            <>
              {/* @ts-ignore */}
              <FaCode /> {project.language}
            </>
          )}
          {project.stargazers_count > 0 && (
            <span className="ms-2 d-flex align-items-center gap-1">
              {/* @ts-ignore */}
              <FaStar className="text-warning" /> {project.stargazers_count}
            </span>
          )}
        </TechStack>
        <Links>
          <IconLink href={project.html_url} target="_blank" rel="noopener noreferrer" title="View Code">
            {/* @ts-ignore */}
            <FaGithub />
          </IconLink>
          {project.homepage && (
            <IconLink href={project.homepage} target="_blank" rel="noopener noreferrer" title="Live Demo">
              {/* @ts-ignore */}
              <FaExternalLinkAlt />
            </IconLink>
          )}
        </Links>
      </Meta>
    </Card>
  );
};

export default ProjectCard;
