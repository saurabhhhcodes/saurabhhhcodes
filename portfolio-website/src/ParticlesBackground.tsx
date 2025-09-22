import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
          background: {
            color: {
              value: "#000000", // Black background for space
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff", // White particles for stars
            },
            links: {
              color: "#ffffff", // White links between stars
              distance: 150,
              enable: true,
              opacity: 0.2, // Slightly more opaque links
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true, // Random movement for stars
              speed: 0.5, // Slower movement
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80, // More stars
            },
            opacity: {
              value: { min: 0.1, max: 0.5 }, // Varying opacity for stars
            },
            shape: {
              type: "circle", // Circle shape for stars
            },
            size: {
              value: { min: 1, max: 3 }, // Smaller, varying star sizes
            },
          },
          detectRetina: true,
        }}
    />
  );
};

export default ParticlesBackground;
