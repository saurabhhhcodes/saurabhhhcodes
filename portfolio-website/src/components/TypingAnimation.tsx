import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingAnimation: React.FC = () => {
    return (
        <TypeAnimation
            sequence={[
                'AI Engineer Intern @Akoode Technologies',
                2000,
                'Agent.AI Global Challenge Winner 🏆',
                2000,
                'Google ADK Contributor 💻',
                2000,
                'TCS HackerQuest Qualifier 🎯',
                2000,
            ]}
            wrapper="span"
            speed={50}
            style={{
                fontSize: '24px',
                display: 'inline-block',
                textShadow: '0 0 5px rgba(255,255,255,0.5)'
            }}
            repeat={Infinity}
        />
    );
};

export default TypingAnimation;
