import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

const projects = [
  {
    id: 1,
    name: "AI Outlook Calendar Agent - Multi-Tenant Calendar Management",
    html_url: "https://github.com/saurabhhhcodes/ai-outlook-calendar-agent",
    demo_url: "https://ai-outlook-calendar-agent.streamlit.app",
    description: "📅 LIVE APP: Autonomous NLP agents for Microsoft Outlook calendar automation. Engineered multi-tenant AI platform reducing administrative overhead by 40%. Features personal/business email login, automatic event scheduling, and secure OAuth integration. Tech Stack: Microsoft Graph API, LangChain, Multi-tenant Architecture",
  },
  {
    id: 2,
    name: "Chatlly RAG Assistant - Enterprise Knowledge Assistant",
    html_url: "https://github.com/saurabhhhcodes/chatlly",
    demo_url: "https://pal.chatlly.com",
    description: "🤖 LIVE PLATFORM: Production-ready RAG + AgentKit demo for regulated industries. Multi-format ingestion (PDF, CSV, DOCX), OAuth/SSO, conversational memory, and agentic reasoning. Reduced user onboarding complexity and enhanced platform scalability. Tech Stack: FastAPI, Next.js, Chroma, OpenAI, AgentKit",
  },
  {
    id: 3,
    name: "Catalyst Bio - Next-Generation Bioinformatics Platform",
    html_url: "https://github.com/saurabhhhcodes/catalyst-bio",
    description: "🔬 MULTI-AGENT: Complete rewrite of GeneInsight with multi-agent architecture. Features 24 specialized modules including Genomics, Transcriptomics, Proteomics, Drug Discovery, and Structural Biology. Master Agent coordinates Data Collection, Analysis, Modeling, and Visualization agents. Tech Stack: Streamlit, FastAPI, Multi-Agent System, Chroma DB",
  },
  {
    id: 4,
    name: "OpenBioGen-AI - Advanced Professional Bioinformatics Platform",
    html_url: "https://github.com/saurabhhhcodes/OpenBioGen-AI",
    demo_url: "https://openbiogen-ai.streamlit.app/",
    description: "🚀 LIVE DEMO: Complete AI-powered bioinformatics system with gene-disease association analysis, clinical decision support, and multi-database integration. Features memory systems, performance optimization, and security auditing. Tech Stack: Streamlit, LangChain, HuggingFace, Tavily API",
  },
  {
    id: 5,
    name: "GeneInsight Platform - AI-Enhanced SaaS Bioinformatics",
    html_url: "https://github.com/saurabhhhcodes/geneinsight-platform",
    demo_url: "https://geneinsight-platform.vercel.app/",
    description: "🌐 LIVE SAAS: Multi-tenant bioinformatics platform with conversational AI assistant, molecular docking, 3D visualization, and COVID-19 analysis. Subscription-based SaaS with pricing plans ($0-$199/mo). Tech Stack: Next.js 15, Spring Boot 3.2, LangChain, PostgreSQL",
  },
  {
    id: 6,
    name: "Smart Plant Care Assistant - AI Plant Health Monitor",
    html_url: "https://github.com/saurabhhhcodes/smart-plant-care-assistant-1",
    demo_url: "https://smart-plant-care-langchain.streamlit.app/",
    description: "🌱 LIVE APP: AI-powered plant care with image analysis, confidence scores, and multi-LLM support (OpenAI, Anthropic, Meta). Features disease detection, personalized recommendations, and user authentication with 20 free trials. Tech Stack: Streamlit, LangChain, OpenCV",
  },
  {
    id: 7,
    name: "Laundrify Application - On-Demand Laundry Service",
    html_url: "#",
    description: "📱 FULL-STACK MOBILE: On-demand laundry application with real-time order tracking and integrated payments. Features service scheduling, user management, and mobile-first design. Complete implementation with production-ready features. Tech Stack: React Native, Spring Boot, Payment Integration",
  },
  {
    id: 8,
    name: "GeneInsight Backend - Full-Stack Gene Analysis Platform",
    html_url: "https://github.com/saurabhhhcodes/GeneInsightBackend",
    description: "🧬 MICROSERVICES: Comprehensive platform for gene-disease association analysis with user authentication, ML prediction, and 3D visualization. Features BioPython integration, Random Forest classification, and Docker deployment. Tech Stack: Java 17, Spring Boot, Python FastAPI, React TypeScript",
  },
];

const Projects: React.FC = () => {
  return (
    <Row>
      {projects.map((repo, index) => (
        <Col key={repo.id} md={6} className="mb-4">
          <Fade delay={index * 100}>
            <Card style={{ height: '100%' }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{repo.name}</Card.Title>
                <Card.Text className="flex-grow-1">{repo.description}</Card.Text>
                <div className="mt-auto">
                  <div className="d-flex gap-2">
                    <Button 
                      variant="primary" 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      size="sm"
                    >
                      GitHub
                    </Button>
                    {(repo as any).demo_url && (
                      <Button 
                        variant="success" 
                        href={(repo as any).demo_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        size="sm"
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      ))}
    </Row>
  );
}

export default Projects;