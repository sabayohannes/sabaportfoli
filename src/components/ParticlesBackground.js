import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#0d1117" },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 150,
            density: { enable: true, area: 800 },
          },
          color: { value: "#61dafb" },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          links: {
            enable: false, // This ensures the wave look, not the spider web
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            straight: false,
            outModes: { default: "out" },
            path: {
              enable: true,
              delay: { value: 0.5 },
              options: {
                size: 20,
                draw: false,
                increment: 0.005,
              },
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 0.8,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;