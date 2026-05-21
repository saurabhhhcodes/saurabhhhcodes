import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './OpenSourcePrograms.css';

interface Program {
    name: string;
    role: string;
    detail: string;
    metric: string;
    link?: string;
    accent: string;
}

interface ProgramStat {
    label: string;
    value: string;
    detail: string;
}

const programStats: ProgramStat[] = [
    {
        label: 'Contribution Style',
        value: 'Issue-first',
        detail: 'Assigned, scoped, and maintainer-aware',
    },
    {
        label: 'Review Standard',
        value: 'Clean',
        detail: 'Scoped PRs with validation notes',
    },
    {
        label: 'Core Areas',
        value: 'AI + Backend',
        detail: 'Security, testing, CI, docs, tooling',
    },
    {
        label: 'Program Focus',
        value: '2026',
        detail: 'GSSoC, GSoC, and NSoC contributions',
    },
];

const programs: Program[] = [
    {
        name: 'GSSoC 2026',
        role: 'Contributor · Open Source + AI/Agents',
        detail: 'Shipping reviewed PRs across approved projects in AI/ML, agentic AI, RAG, backend reliability, security, testing, and documentation.',
        metric: 'Issue-first contributions with clear validation, focused scope, and maintainer-friendly review notes',
        link: 'https://gssoc.girlscript.org/profile/6a73d848-056f-4043-a79b-83dfc87113ac',
        accent: '#FF6B35',
    },
    {
        name: 'GSoC 2026',
        role: 'Contributor',
        detail: 'Building production-minded open-source systems with clean architecture, strong tests, and maintainable implementation notes.',
        metric: 'Selected contributor focused on maintainable open-source delivery',
        link: 'https://summerofcode.withgoogle.com/',
        accent: '#4285F4',
    },
    {
        name: 'NSoC 2026',
        role: 'Contributor',
        detail: 'Contributing merge-ready fixes and features across Nexus community projects while keeping changes useful, focused, and tested.',
        metric: 'Nexus Spring of Code contributor focused on production-impact PRs',
        accent: '#7C3AED',
    },
];

const focusAreas = ['Agentic AI', 'RAG', 'NLP', 'OpenCV', 'Security', 'APIs', 'Testing', 'CI/CD'];
const OpenSourcePrograms: React.FC = () => (
    <section id="opensource" className="opensource-section">
        <Fade>
            <h2 className="section-title">Open Source 2026</h2>
            <p className="opensource-lead">
                Active contributor across GSSoC, GSoC, and NSoC, focused on real engineering work that is assigned,
                reviewed, tested, and easy for maintainers to merge.
            </p>
            <div className="opensource-stats" aria-label="Open source program stats">
                {programStats.map((stat) => (
                    <div key={stat.label} className="opensource-stat">
                        <strong>{stat.value}</strong>
                        <span>{stat.label}</span>
                        <small>{stat.detail}</small>
                    </div>
                ))}
            </div>
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
                        <strong className="opensource-metric">{program.metric}</strong>
                        {program.link && (
                            <a
                                className="opensource-link"
                                href={program.link}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: program.accent }}
                            >
                                View profile
                            </a>
                        )}
                    </article>
                ))}
            </div>
            <div className="opensource-focus" aria-label="Open source focus areas">
                {focusAreas.map((area) => (
                    <span key={area}>{area}</span>
                ))}
            </div>
            <div className="opensource-difficulty" aria-label="Open source contribution standard">
                <strong>Contribution standard:</strong>
                <span>Assigned issues</span>
                <span>Focused scope</span>
                <span>Local validation</span>
                <span>Clear follow-ups</span>
            </div>
            <p className="opensource-note">
                I focus on useful, reviewable changes across active repositories, with enough context for maintainers
                to understand what changed and how it was tested.
            </p>
        </Fade>
    </section>
);

export default OpenSourcePrograms;
