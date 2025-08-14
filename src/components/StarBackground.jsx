import { useEffect, useState } from "react";

export function StarBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    generateStars();
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const maxRadius = Math.min(window.innerWidth, window.innerHeight);
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 5000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.sqrt(Math.random()) * maxRadius;

      newStars.push({
        id: i,
        size: Math.random() * 1.5 + 0.5,
        angle,
        radius,
        orbitDuration: 20 + Math.random() * 30,
        initialDelay: Math.random() * 30,
      });
    }
    setStars(newStars);
  };

  return (
    <div className="star-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.orbitDuration}s`,
            animationDelay: `-${star.initialDelay}s`,
            "--radius": `${star.radius}px`,
            "--initial-angle": `${(star.angle * 180) / Math.PI}deg`,
          }}
        />
      ))}
    </div>
  );
}