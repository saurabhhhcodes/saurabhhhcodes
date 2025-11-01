import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import './App.css';
import './custom.css';
import Projects from './Projects';
import ParticlesBackground from './ParticlesBackground';

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
            <p style={{ textShadow: '0 0 5px rgba(255,255,255,0.5)' }}>AI Agent A2A Developer | Autonomous Systems Engineer</p>
          </Fade>
        </header>

        <Container>
          <section id="about">
            <Fade>
              <h2 className="section-title">About Me</h2>
              <p className="lead">
                I am a Software Engineer specializing in autonomous A2A (Agent-to-Agent) systems from Lucknow, India.
                Currently working as an AI Agent A2A Developer (Freelance), I have proven expertise in creating and scaling end-to-end intelligent applications using Retrieval-Augmented Generation (RAG) and multi-agent frameworks like CrewAI and AutoGen.
                
                My professional experience includes engineering multi-tenant AI platforms (reducing administrative overhead by 40%), enhancing full-stack applications with OAuth/SSO integration, and constructing comprehensive bioinformatics systems using Langflow for RAG workflows.
                
                I leverage a diverse tech stack including Python, Java, SQL, JavaScript/TypeScript, with expertise in AI frameworks (LangChain, CrewAI, AutoGen, Langflow), ML libraries (PyTorch, TensorFlow, Hugging Face, Scikit-learn), and cloud platforms (AWS, Docker, Vercel, Streamlit).
                
                My achievements include Candidate Master on Codeforces (Top 5%), Top 10% on LeetCode, Google Summer of Code contributor, and Google Code Jam participant. I am actively seeking high-impact engineering roles to build and deploy robust, self-governing solutions at leading technology companies.
              </p>
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
              <p className="lead contact-text">Feel free to reach out to me on my GitHub profile or via email.</p>
              <p className="lead contact-email">Email: saurabhbajpai03@outlook.com</p>
              <Button variant="primary" href="https://github.com/saurabhhhcodes" target="_blank">GitHub</Button>
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
