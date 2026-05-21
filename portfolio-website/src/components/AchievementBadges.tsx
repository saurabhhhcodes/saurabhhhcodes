import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AchievementBadges.css';

interface Achievement {
    title: string;
    icon: string;
    description: string;
    link?: string;
    color: string;
}

const achievements: Achievement[] = [
    {
        title: 'Agent.AI Winner',
        icon: '🏆',
        description: 'Global Challenge Winner',
        color: '#FFD700',
    },
    {
        title: 'TCS HackerQuest',
        icon: '🎯',
        description: 'Round 2 Qualifier',
        color: '#FF6B6B',
    },
    {
        title: 'Google ADK',
        icon: '💻',
        description: 'Open Source Contributor',
        color: '#4285F4',
    },
    {
        title: 'GSSoC 2026',
        icon: '🌐',
        description: '7,600+ Points · 12K Morning Target',
        link: 'https://gssoc.girlscript.org/profile/6a73d848-056f-4043-a79b-83dfc87113ac',
        color: '#FF6B35',
    },
    {
        title: 'GSoC 2026',
        icon: '🚀',
        description: 'Selected Contributor',
        link: 'https://summerofcode.withgoogle.com/',
        color: '#00D9FF',
    },
    {
        title: 'NSoC 2026',
        icon: '⚡',
        description: 'Nexus Contributor · AI, Security, Backend',
        color: '#7C3AED',
    },
];

const AchievementBadges: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="achievements" ref={ref} className="achievements-section">
            <h2 className="section-title">Achievements & Recognition</h2>
            <div className="achievements-grid">
                {achievements.map((achievement, index) => {
                    const content = (
                        <>
                            <motion.div
                                className="achievement-icon"
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                }}
                            >
                                {achievement.icon}
                            </motion.div>
                            <h3 className="achievement-title" style={{ color: achievement.color }}>
                                {achievement.title}
                            </h3>
                            <p className="achievement-description">{achievement.description}</p>
                        </>
                    );

                    return (
                    <motion.div
                        key={achievement.title}
                        className="achievement-badge"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{ borderColor: achievement.color }}
                    >
                        {achievement.link ? (
                            <a
                                className="achievement-link"
                                href={achievement.link}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${achievement.title} profile`}
                            >
                                {content}
                            </a>
                        ) : (
                            content
                        )}
                    </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default AchievementBadges;
