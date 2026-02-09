import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import './App.css';
import './custom.css';
import Projects from './Projects';
import ParticlesBackground from './ParticlesBackground';
import TypingAnimation from './components/TypingAnimation';
import SkillsSection from './components/SkillsSection';
import AchievementBadges from './components/AchievementBadges';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">Saurabh Kumar Bajpai</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <header className="App-header">
          <Fade direction="down">
            <h1 style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>Saurabh Kumar Bajpai</h1>
            <p style={{ textShadow: '0 0 5px rgba(255,255,255,0.5)' }}>
              <TypingAnimation />
            </p>
          </Fade>
        </header>

        <Container>
          <section id="about">
            <Fade>
              <h2 className="section-title">About Me</h2>
              <p className="lead">
                I am an AI Engineer specializing in multimodal AI systems, LLM/VLM fine-tuning, and autonomous agent development from Lucknow, India.
                Currently working as an AI Engineer Intern at Akoode Technologies, I support end-to-end development of AI systems spanning text, image, and audio inputs, while building data pipelines for high-quality LLM/VLM training datasets.

                As a Google Agent Development Kit (ADK) contributor, I've fixed critical runtime errors in RemoteA2aAgent and enhanced function-call handling in multi-agent workflows using Python and Go. I'm also a winner of the Agent.AI Global Challenge for building Deal Doctor, an autonomous HubSpot CRM automation system.

                My professional experience includes engineering multi-tenant AI platforms (reducing administrative overhead by 40%), implementing RAG pipelines, and constructing comprehensive bioinformatics systems. I leverage a diverse tech stack including Python, Java, Go, SQL, JavaScript/TypeScript, with expertise in AI frameworks (LangChain, Google ADK, Agent.AI), ML libraries (PyTorch, TensorFlow, Hugging Face), and cloud platforms (AWS, GCP, Azure, Docker).

                My achievements include Agent.AI Global Challenge Winner, TCS HackerQuest Season 10 Round 2 Qualifier, Google ADK Contributor, Candidate Master on Codeforces (Top 5%), and Top 10% on LeetCode. I am actively seeking high-impact engineering roles to build and deploy robust AI systems at leading technology companies.
              </p>
            </Fade>
          </section>

          <SkillsSection />

          <AchievementBadges />

          <section id="ventures">
            <Fade>
              <h2 className="section-title">My Ventures</h2>
              <div className="card mb-4 shadow-sm" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div className="card-body text-center">
                  <h3 className="card-title text-info">AxonFlow.in</h3>
                  <h5 className="card-subtitle mb-3 text-muted">Founder & Lead Instructor</h5>
                  <p className="card-text">
                    Building the next generation of AI Engineers & Systems.
                    <br />
                    <strong>Agency:</strong> Delivering high-performance AI solutions, RAG systems, and autonomous agents.
                    <br />
                    <strong>Academy:</strong> Training developers in advanced AI engineering and LLM orchestration.
                  </p>
                  <Button variant="outline-info" href="https://axonflow.in" target="_blank">Visit AxonFlow.in</Button>
                </div>
              </div>
            </Fade>
          </section>

          <section id="projects">
            <Fade>
              <h2 className="section-title">My Projects</h2>
              <Projects />
            </Fade>
          </section>

          <section id="contact">
            <Fade>
              <h2 className="section-title">Get in Touch</h2>
              <p className="lead contact-text">Feel free to reach out to me on LinkedIn, GitHub, or via email.</p>
              <p className="lead contact-email">Email: saurabhbajpai03@outlook.com</p>
              <div className="d-flex gap-2 justify-content-center flex-wrap">
                <Button variant="primary" href="https://linkedin.com/in/saurabhbajpai03" target="_blank">LinkedIn</Button>
                <Button variant="dark" href="https://github.com/saurabhhhcodes" target="_blank">GitHub</Button>
              </div>
            </Fade>
          </section>
        </Container>

        <footer>
          <Container>
            <p>Copyright &copy; {new Date().getFullYear()} Saurabh Kumar Bajpai</p>
          </Container>
        </footer>
      </div>
    </div>
  );
}

export default App;
