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
            <p style={{ textShadow: '0 0 5px rgba(255,255,255,0.5)' }}>Agentic AI Developer | RAG Application Developer</p>
          </Fade>
        </header>

        <Container>
          <section id="about">
            <Fade>
              <h2 className="section-title">About Me</h2>
              <p className="lead">
                I am a B.Tech student from Lucknow, India, specializing in AI/ML and Bioinformatics Development.
                My core focus lies in building advanced AI agentic applications, developing robust RAG (Retrieval-Augmented Generation) applications, and designing multi-level agentic architectures.
                I leverage a diverse tech stack including Java, Python, JavaScript, TypeScript, C++, and SQL, with expertise in frontend (React, Next.js, Vue.js) and backend (Node.js, Express.js, Spring Boot, Django, FastAPI) frameworks.
                I work with databases like MySQL, PostgreSQL, MongoDB, and cloud platforms such as AWS and Docker.
                My toolkit includes ML frameworks like TensorFlow, PyTorch, and Scikit-Learn, and AI tools like LangChain, OpenAI GPT-4, and Hugging Face.
                In bioinformatics, I apply BioPython and various genomic analysis tools to solve complex problems.
                I am continuously expanding my knowledge in Advanced LLM Orchestration, Bioinformatics AI, and Genomic Analysis, and I am actively seeking challenging AI/ML & Bioinformatics Engineering Opportunities.
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
