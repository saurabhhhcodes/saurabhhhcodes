#!/usr/bin/env python3
"""
Generate a professional PDF resume for Saurabh Kumar Bajpai
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.colors import HexColor

def create_resume():
    # Create PDF
    pdf_file = "/home/saurabh/saurabhhhcodes/portfolio-website/public/Saurabh_Kumar_Bajpai_Resume.pdf"
    doc = SimpleDocTemplate(pdf_file, pagesize=letter,
                            rightMargin=0.75*inch, leftMargin=0.75*inch,
                            topMargin=0.75*inch, bottomMargin=0.75*inch)
    
    # Container for the 'Flowable' objects
    elements = []
    
    # Define styles
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=HexColor('#1a1a1a'),
        spaceAfter=6,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontSize=10,
        textColor=HexColor('#333333'),
        alignment=TA_CENTER,
        spaceAfter=12
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=HexColor('#0066cc'),
        spaceAfter=6,
        spaceBefore=12,
        fontName='Helvetica-Bold'
    )
    
    subheading_style = ParagraphStyle(
        'SubHeading',
        parent=styles['Normal'],
        fontSize=11,
        textColor=HexColor('#1a1a1a'),
        spaceAfter=4,
        fontName='Helvetica-Bold'
    )
    
    body_style = ParagraphStyle(
        'CustomBody',
        parent=styles['Normal'],
        fontSize=10,
        textColor=HexColor('#333333'),
        spaceAfter=4,
        leftIndent=12
    )
    
    # Header
    elements.append(Paragraph("SAURABH KUMAR BAJPAI", title_style))
    elements.append(Paragraph(
        "saurabhbajpai03@outlook.com • +91 82994 46341 • Lucknow, India<br/>"
        '<link href="https://linkedin.com/in/saurabhbajpai03" color="blue">linkedin.com/in/saurabhbajpai03</link> • '
        '<link href="https://github.com/saurabhhhcodes" color="blue">github.com/saurabhhhcodes</link>',
        contact_style
    ))
    
    elements.append(HRFlowable(width="100%", thickness=1, color=HexColor('#0066cc')))
    elements.append(Spacer(1, 0.1*inch))
    
    # Professional Summary
    elements.append(Paragraph("PROFESSIONAL SUMMARY", heading_style))
    elements.append(Paragraph(
        "AI Engineer specializing in autonomous and agentic AI systems, multimodal pipelines, and backend AI infrastructure. "
        "Contributor to Google's Agent Development Kit (Python & Go), shipping production-grade fixes improving A2A reliability, "
        "function-call handling, and agent orchestration. Hands-on experience with RAG systems, LLM/VLM integration, "
        "cloud-native AI deployments, and enterprise automation.",
        body_style
    ))
    elements.append(Spacer(1, 0.15*inch))
    
    # Experience
    elements.append(Paragraph("EXPERIENCE", heading_style))
    
    # Akoode Technologies
    elements.append(Paragraph("AI Engineer Intern — Akoode Technologies Pvt. Ltd.", subheading_style))
    elements.append(Paragraph("<i>Jan 2026 – Present | Gurugram, Haryana (On-site)</i>", body_style))
    elements.append(Paragraph("• Supporting end-to-end development of multimodal AI systems spanning text, image, and audio inputs.", body_style))
    elements.append(Paragraph("• Built data curation and preprocessing pipelines for high-quality LLM/VLM training datasets.", body_style))
    elements.append(Paragraph("• Assisted in fine-tuning LLMs/VLMs and implementing RAG pipelines to improve response accuracy.", body_style))
    elements.append(Paragraph("• Developed agentic AI components enabling intelligent task routing and multimodal reasoning.", body_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Freelance
    elements.append(Paragraph("Software Engineer (AI + Backend) — Freelance (Fiverr)", subheading_style))
    elements.append(Paragraph("<i>Aug 2025 – Present</i>", body_style))
    elements.append(Paragraph("• Built Outlook Calendar NLP Assistant using Microsoft Graph API; achieved 97% intent accuracy.", body_style))
    elements.append(Paragraph("• Implemented Google & Microsoft SSO for enterprise chatbot platform chatlly.com.", body_style))
    elements.append(Paragraph("• Developed you.fyi, a workspace and digital asset management system with shareable kits.", body_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Atmohive
    elements.append(Paragraph("Software Engineer Intern (AI/ML) — Atmohive Biotech", subheading_style))
    elements.append(Paragraph("<i>May 2024 – Jul 2024</i>", body_style))
    elements.append(Paragraph("• Created GeneInsight, a Spring Boot bioinformatics SaaS reducing DNA analysis time by 80–90%.", body_style))
    elements.append(Paragraph("• Built conversational NLP modules and 3D molecular visualization tools.", body_style))
    elements.append(Paragraph("• Delivered RBAC-enabled multi-tenant dashboard used by 100+ researchers.", body_style))
    elements.append(Spacer(1, 0.1*inch))
    
    # Amity
    elements.append(Paragraph("AI/ML Research Intern — Amity University Bioinformatics Lab", subheading_style))
    elements.append(Paragraph("<i>Jul 2025 – Sep 2025</i>", body_style))
    elements.append(Paragraph("• Developed OpenBioGen AI, a gene–disease prediction system using custom RAG pipelines.", body_style))
    elements.append(Paragraph("• Integrated PubMed, OMIM, and UniProt ETL pipelines, reducing compute latency by 40%.", body_style))
    elements.append(Paragraph("• Implemented retrieval explainability and reasoning trace modules.", body_style))
    elements.append(Spacer(1, 0.15*inch))
    
    # Open Source & Projects
    elements.append(Paragraph("OPEN SOURCE & KEY PROJECTS", heading_style))
    
    elements.append(Paragraph("Google — Agent Development Kit (ADK) (Python & Go) — Contributor", subheading_style))
    elements.append(Paragraph("• Fixed critical runtime errors in RemoteA2aAgent, improving agent communication reliability.", body_style))
    elements.append(Paragraph("• Enhanced function-call handling and reasoning trace consistency in multi-agent workflows.", body_style))
    elements.append(Paragraph("• Added unit tests in Python and Go, improving stability and code coverage.", body_style))
    elements.append(Spacer(1, 0.1*inch))
    
    elements.append(Paragraph("Deal Doctor — Agent.AI Global Challenge Winner", subheading_style))
    elements.append(Paragraph("• Built autonomous HubSpot CRM automation system with intelligent deal pipeline management.", body_style))
    elements.append(Paragraph("• Implemented automated lead scoring and autonomous follow-ups using multi-agent orchestration.", body_style))
    elements.append(Spacer(1, 0.15*inch))
    
    # Technical Skills
    elements.append(Paragraph("TECHNICAL SKILLS", heading_style))
    elements.append(Paragraph("<b>Programming:</b> Python, Java, Go, SQL, TypeScript", body_style))
    elements.append(Paragraph("<b>AI / ML:</b> LLMs, VLMs, RAG, Agentic AI, Multimodal AI, Prompt Engineering, NLP", body_style))
    elements.append(Paragraph("<b>Frameworks & Platforms:</b> Google ADK, Agent.AI, Spring Boot, FastAPI, Gin", body_style))
    elements.append(Paragraph("<b>Cloud & DevOps:</b> AWS, Google Cloud Console, Microsoft Azure Console, Firebase, Docker", body_style))
    elements.append(Paragraph("<b>Databases:</b> PostgreSQL, MySQL, MongoDB, pgvector", body_style))
    elements.append(Paragraph("<b>Tools:</b> Git, Linux, REST APIs, OAuth, Microsoft Graph API, OpenCV", body_style))
    elements.append(Paragraph("<b>CS Fundamentals:</b> Data Structures, Algorithms, OS, DBMS, Computer Networks", body_style))
    elements.append(Spacer(1, 0.15*inch))
    
    # Honors and Achievements
    elements.append(Paragraph("HONORS AND ACHIEVEMENTS", heading_style))
    elements.append(Paragraph("• Global Agent.AI Challenge Winner — Built Deal Doctor, an autonomous HubSpot CRM automation system", body_style))
    elements.append(Paragraph("• Qualified Round 2 of TCS HackerQuest CyberSecurity Challenge", body_style))
    elements.append(Paragraph("• Candidate Master (Codeforces), LeetCode Top 10%", body_style))
    elements.append(Paragraph("• Google Summer of Code Contributor, Google Code Jam Participant", body_style))
    elements.append(Spacer(1, 0.15*inch))
    
    # Education
    elements.append(Paragraph("EDUCATION", heading_style))
    elements.append(Paragraph("B.Tech Biotechnology, Amity Institute of Biotechnology, Lucknow", subheading_style))
    elements.append(Paragraph("<i>2022 – 2026</i>", body_style))
    elements.append(Paragraph("Relevant Coursework: Data Structures, Algorithms (Java), Operating Systems, DBMS, Distributed Systems", body_style))
    
    # Build PDF
    doc.build(elements)
    print(f"Resume PDF created successfully at: {pdf_file}")

if __name__ == "__main__":
    create_resume()
