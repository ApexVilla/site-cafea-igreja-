
import React, { useEffect, useState } from 'react';

interface RainParticle {
    id: number;
    tx: number; // Target X coordinate (pixels from center)
    delay: number;
    duration: number;
    size: number;
    opacity: number;
}

const LogoParticleRain: React.FC = () => {
    const [particles, setParticles] = useState<RainParticle[]>([]);

    useEffect(() => {
        const particleCount = 60; // Increased count for "shower" effect
        const newParticles: RainParticle[] = [];

        for (let i = 0; i < particleCount; i++) {
            // Random spread: some go left (-), some go right (+)
            // Spread up to 500px to 800px either side to cover wide screens
            const spread = (Math.random() - 0.5) * 1500;

            newParticles.push({
                id: i,
                tx: spread,
                delay: Math.random() * 5,
                duration: Math.random() * 4 + 3, // 3s to 7s fall
                size: Math.random() * 4 + 2, // 2px to 6px
                opacity: Math.random() * 0.7 + 0.3,
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none z-10 flex items-center justify-center">
            {/* Container is 0x0 center point, particles emit from here */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute bg-church-gold rounded-full shadow-[0_0_10px_2px_rgba(212,175,55,0.8)] animate-fall-light"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        // Start at center (0,0) relative to container
                        left: 0,
                        top: 0,
                        opacity: p.opacity,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        // Pass the target X offset as a CSS variable
                        ['--tx' as any]: `${p.tx}px`
                    }}
                />
            ))}
        </div>
    );
};

export default LogoParticleRain;
