import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './App.css';
import './custom.css';
import Projects from './Projects';
import ParticlesBackground from './ParticlesBackground';
import profileData from './data/profile.json';

const VentureCard = styled(motion.div)`
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(145deg, rgba(26, 27, 38, 0.9), rgba(36, 40, 59, 0.9));
  border: 1px solid var(--accent-cyan);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.1);
`;

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar expand="lg" fixed="top" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>
              {profileData.name.split(' ')[0]}
              <span style={{ color: 'var(--accent-cyan)' }}>/&gt;</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#ventures">Ventures</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <header className="App-header" id="home">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                Hi, I'm <span style={{ color: 'var(--accent-cyan)' }}>{profileData.name}</span>
              </h1>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                AI Agent A2A Developer | Autonomous Systems Engineer
              </h2>
              <div className="d-flex justify-content-center gap-3">
                <Button variant="outline-info" href="#projects" size="lg">View Work</Button>
                <Button variant="primary" href="#contact" size="lg">Contact Me</Button>
              </div>
            </motion.div>
          </Container>
        </header>

        <Container>
          <section id="about">
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">About Me</h2>
              <Row className="justify-content-center">
                <Col md={10}>
                  <p className="lead" style={{ textAlign: 'left', lineHeight: '1.8' }}>
                    {profileData.bio || "I am a passionate developer building the future with code."}
                    <br /><br />
                    I specialize in autonomous A2A (Agent-to-Agent) systems and have proven expertise in creating and scaling end-to-end intelligent applications using Retrieval-Augmented Generation (RAG) and multi-agent frameworks like CrewAI and AutoGen.
                    <br /><br />
                    My professional experience includes engineering multi-tenant AI platforms, enhancing full-stack applications with OAuth/SSO integration, and constructing comprehensive bioinformatics systems.
                  </p>
                  <div className="mt-4 d-flex gap-3 justify-content-center">
                    <div className="text-center">
                      <h3 style={{ color: 'var(--accent-cyan)' }}>{profileData.public_repos}+</h3>
                      <p>Repositories</p>
                    </div>
                    <div className="text-center">
                      <h3 style={{ color: 'var(--accent-purple)' }}>{profileData.followers}+</h3>
                      <p>Followers</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Fade>
          </section>

          <section id="ventures">
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">My Ventures</h2>
              <Row className="justify-content-center mb-5">
                <Col md={10}>
                  <VentureCard
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                      <div className="text-center text-md-start flex-grow-1">
                        <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>AxonFlow.in</h3>
                        <p style={{ color: 'var(--accent-purple)', fontWeight: 600, marginBottom: '1rem' }}>
                          Founder & Lead Instructor
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                          Building the next generation of AI Engineers & Systems.
                          <br />
                          <strong>Agency:</strong> Delivering high-performance AI solutions, RAG systems, and autonomous agents.
                          <br />
                          <strong>Academy:</strong> Training developers in advanced AI engineering and LLM orchestration.
                        </p>
                        <Button
                          variant="outline-info"
                          href="https://axonflow.in"
                          target="_blank"
                          className="mt-2"
                        >
                          Visit AxonFlow.in
                        </Button>
                      </div>
                    </div>
                  </VentureCard>
                </Col>
              </Row>
            </Fade>
          </section>

          <section id="projects">
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">Featured Projects</h2>
              <Projects />
            </Fade>
          </section>

          <section id="contact">
            <Fade direction="up" triggerOnce>
              <h2 className="section-title">Get in Touch</h2>
              <p className="lead mb-5">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="d-flex justify-content-center gap-4 mb-5">
                <a href={profileData.html_url} target="_blank" rel="noopener noreferrer" className="social-icon">
                  {/* @ts-ignore */}
                  <FaGithub size={40} />
                </a>
                <a href="https://linkedin.com/in/saurabhbajpai03" target="_blank" rel="noopener noreferrer" className="social-icon">
                  {/* @ts-ignore */}
                  <FaLinkedin size={40} />
                </a>
                <a href="https://twitter.com/saurabhhhcodes" target="_blank" rel="noopener noreferrer" className="social-icon">
                  {/* @ts-ignore */}
                  <FaTwitter size={40} />
                </a>
                <a href="mailto:saurabhbajpai03@outlook.com" className="social-icon">
                  {/* @ts-ignore */}
                  <FaEnvelope size={40} />
                </a>
              </div>

              <Button variant="outline-primary" href="mailto:saurabhbajpai03@outlook.com" size="lg">
                Say Hello
              </Button>
            </Fade>
          </section>
        </Container>

        <footer>
          <Container>
            <p>Designed & Built by {profileData.name}</p>
            <p className="text-muted small">
              Last updated: {new Date(profileData.updated_at).toLocaleDateString()}
            </p>
          </Container>
        </footer>
      </div>
    </div>
  );
}

export default App;
