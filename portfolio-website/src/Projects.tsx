import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 0,
    name: "Deal Doctor - Agent.AI Global Challenge Winner 🏆",
    html_url: "https://github.com/saurabhhhcodes/deal-doctor",
    demo_url: "https://agent.ai/agent/thedealdoctor",
    description: "🏆 AGENT.AI WINNER: Autonomous HubSpot CRM automation system. Built intelligent deal pipeline management with automated lead scoring and autonomous follow-ups. Winner of the Agent.AI Global Challenge for innovative multi-agent orchestration and real-time CRM automation. Tech Stack: Agent.AI, HubSpot API, Multi-Agent System",
  },
  {
    id: 1,
    name: "NutriSync - AI-Powered Nutrition & Fitness Tracker 🥗",
    html_url: "https://github.com/saurabhhhcodes/nutrisync",
    demo_url: "https://aistudio.google.com/app/drive/1sl1Lf2U2UIRE1p9nPMjDzUvSqmT6iORt?showPreview=true&showAssistant=true",
    description: "🥗 LIVE APP: Comprehensive nutrition and fitness tracking platform with AI-powered meal planning, calorie tracking, and personalized workout recommendations. Features barcode scanning, recipe suggestions, and progress analytics. Tech Stack: React, Node.js, MongoDB, OpenAI API, Nutrition API",
  },
  {
    id: 2,
    name: "AI Outlook Calendar Agent - Multi-Tenant Calendar Management",
    html_url: "https://github.com/saurabhhhcodes/ai-outlook-calendar-agent",
    demo_url: "https://ai-outlook-calendar-agent.streamlit.app",
    description: "📅 LIVE APP: Autonomous NLP agents for Microsoft Outlook calendar automation. Engineered multi-tenant AI platform reducing administrative overhead by 40%. Features personal/business email login, automatic event scheduling, and secure OAuth integration. Tech Stack: Microsoft Graph API, LangChain, Multi-tenant Architecture",
  },
  {
    id: 3,
    name: "Chatlly RAG Assistant - Enterprise Knowledge Assistant",
    html_url: "https://github.com/saurabhhhcodes/chatlly",
    demo_url: "https://pal.chatlly.com",
    description: "🤖 LIVE PLATFORM: Production-ready RAG + AgentKit demo for regulated industries. Multi-format ingestion (PDF, CSV, DOCX), OAuth/SSO, conversational memory, and agentic reasoning. Reduced user onboarding complexity and enhanced platform scalability. Tech Stack: FastAPI, Next.js, Chroma, OpenAI, AgentKit",
  },
  {
    id: 4,
    name: "Catalyst Bio - Next-Generation Bioinformatics Platform",
    html_url: "https://github.com/saurabhhhcodes/catalyst-bio",
    description: "🔬 MULTI-AGENT: Complete rewrite of GeneInsight with multi-agent architecture. Features 24 specialized modules including Genomics, Transcriptomics, Proteomics, Drug Discovery, and Structural Biology. Master Agent coordinates Data Collection, Analysis, Modeling, and Visualization agents. Tech Stack: Streamlit, FastAPI, Multi-Agent System, Chroma DB",
  },
  {
    id: 5,
    name: "OpenBioGen-AI - Advanced Professional Bioinformatics Platform",
    html_url: "https://github.com/saurabhhhcodes/OpenBioGen-AI",
    demo_url: "https://openbiogen-ai.streamlit.app/",
    description: "🚀 LIVE DEMO: Complete AI-powered bioinformatics system with gene-disease association analysis, clinical decision support, and multi-database integration. Features memory systems, performance optimization, and security auditing. Tech Stack: Streamlit, LangChain, HuggingFace, Tavily API",
  },
  {
    id: 6,
    name: "GeneInsight Platform - AI-Enhanced SaaS Bioinformatics",
    html_url: "https://github.com/saurabhhhcodes/geneinsight-platform",
    demo_url: "https://geneinsight-platform.vercel.app/",
    description: "🌐 LIVE SAAS: Multi-tenant bioinformatics platform with conversational AI assistant, molecular docking, 3D visualization, and COVID-19 analysis. Subscription-based SaaS with pricing plans ($0-$199/mo). Tech Stack: Next.js 15, Spring Boot 3.2, LangChain, PostgreSQL",
  },
  {
    id: 7,
    name: "Smart Plant Care Assistant - AI Plant Health Monitor",
    html_url: "https://github.com/saurabhhhcodes/smart-plant-care-assistant-1",
    demo_url: "https://smart-plant-care-langchain.streamlit.app/",
    description: "🌱 LIVE APP: AI-powered plant care with image analysis, confidence scores, and multi-LLM support (OpenAI, Anthropic, Meta). Features disease detection, personalized recommendations, and user authentication with 20 free trials. Tech Stack: Streamlit, LangChain, OpenCV",
  },
  {
    id: 8,
    name: "Sahayak.AI - Open-Source AI Assistant Platform 🤖",
    html_url: "https://github.com/saurabhhhcodes/sahayak-ai",
    demo_url: "https://sahayak-ai.vercel.app",
    description: "🤖 LIVE PLATFORM: Open-source AI assistant with multi-LLM fallback system (Groq, Claude, OpenRouter, HuggingFace). Features video search, image generation, mermaid diagrams, and 100% test pass rate. Robust error handling ensures zero API rate limit issues. Tech Stack: React, FastAPI, LangChain, Multiple LLM Providers",
  },
  {
    id: 9,
    name: "HelixMind - Gemini 2.0 Flash Thinking AI Platform 🧠",
    html_url: "https://github.com/saurabhhhcodes/helixmind",
    demo_url: "https://helixmind.onrender.com",
    description: "🧠 LIVE APP: Advanced AI platform powered by Gemini 2.0 Flash Thinking model with real-time streaming responses. Features high-quality AI interactions, modern UI/UX, and production-ready deployment on Render. Hackathon submission showcasing cutting-edge AI capabilities. Tech Stack: React, Flask, Gemini 2.0 API, Render",
  },
  {
    id: 10,
    name: "Laundrify Application - On-Demand Laundry Service",
    html_url: "#",
    description: "📱 FULL-STACK MOBILE: On-demand laundry application with real-time order tracking and integrated payments. Features service scheduling, user management, and mobile-first design. Complete implementation with production-ready features. Tech Stack: React Native, Spring Boot, Payment Integration",
  },
];

const Projects: React.FC = () => {
  return (
    <Row>
      {projects.map((repo, index) => (
        <Col key={repo.id} md={6} className="mb-4">
          <Fade delay={index * 100}>
            <motion.div
              whileHover={{ scale: 1.03, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Card style={{ height: '100%' }} className="project-card">
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
            </motion.div>
          </Fade>
        </Col>
      ))}
    </Row>
  );
}

export default Projects;