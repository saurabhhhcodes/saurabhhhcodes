import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AchievementBadges.css';

interface Achievement {
    title: string;
    icon: string;
    description: string;
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
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={achievement.title}
                        className="achievement-badge"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{ borderColor: achievement.color }}
                    >
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
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AchievementBadges;
