import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './OpenSourcePrograms.css';

interface Program {
    name: string;
    role: string;
    detail: string;
    accent: string;
}

const programs: Program[] = [
    {
        name: 'GSSoC 2026',
        role: 'Contributor · Open Source + AI/Agents',
        detail: 'Shipping reviewed PRs across approved projects in AI/ML, agentic AI, RAG, backend reliability, security, testing, and documentation.',
        accent: '#FF6B35',
    },
    {
        name: 'GSoC 2026',
        role: 'Contributor',
        detail: 'Building production-minded open-source systems with clean architecture, strong tests, and maintainable implementation notes.',
        accent: '#4285F4',
    },
    {
        name: 'NSoC 2026',
        role: 'Contributor',
        detail: 'Contributing merge-ready fixes and features across community projects while keeping changes useful, focused, and tested.',
        accent: '#7C3AED',
    },
];

const focusAreas = ['Agentic AI', 'RAG', 'NLP', 'OpenCV', 'Security', 'APIs', 'Testing', 'CI/CD'];

const OpenSourcePrograms: React.FC = () => (
    <section id="opensource" className="opensource-section">
        <Fade>
            <h2 className="section-title">Open Source 2026</h2>
            <p className="opensource-lead">
                Active contributor across GSSoC, GSoC, and NSoC, focused on real engineering work that is reviewed,
                tested, and useful to maintainers.
            </p>
            <div className="opensource-grid">
                {programs.map((program) => (
                    <article
                        key={program.name}
                        className="opensource-card"
                        style={{ borderColor: program.accent }}
                    >
                        <span className="opensource-tag" style={{ backgroundColor: program.accent }}>
                            {program.role}
                        </span>
                        <h3>{program.name}</h3>
                        <p>{program.detail}</p>
                    </article>
                ))}
            </div>
            <div className="opensource-focus" aria-label="Open source focus areas">
                {focusAreas.map((area) => (
                    <span key={area}>{area}</span>
                ))}
            </div>
        </Fade>
    </section>
);

export default OpenSourcePrograms;
