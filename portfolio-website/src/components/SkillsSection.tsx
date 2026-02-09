import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SkillsSection.css';

interface Skill {
    name: string;
    level: number;
    icon: string;
}

const skills: Skill[] = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'Java', level: 90, icon: '☕' },
    { name: 'Go', level: 80, icon: '🔷' },
    { name: 'TypeScript', level: 85, icon: '📘' },
    { name: 'SQL', level: 88, icon: '🗄️' },
    { name: 'LangChain', level: 92, icon: '🔗' },
    { name: 'Google ADK', level: 85, icon: '🤖' },
    { name: 'TensorFlow', level: 87, icon: '🧠' },
    { name: 'PyTorch', level: 85, icon: '🔥' },
    { name: 'AWS', level: 82, icon: '☁️' },
    { name: 'Docker', level: 88, icon: '🐳' },
    { name: 'RAG Systems', level: 93, icon: '📚' },
];

const SkillsSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" ref={ref} className="skills-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="skill-item"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="skill-header">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                            <motion.div
                                className="skill-progress"
                                initial={{ width: 0 }}
                                animate={inView ? { width: `${skill.level}%` } : {}}
                                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
