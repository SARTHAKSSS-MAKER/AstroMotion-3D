import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import SpaceScene from "./components/SpaceScene";
import CameraController from "./components/CameraController";
import HandTracker from "./components/HandTracker";

export default function App() {
  const [showHero, setShowHero] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(false);
    }, 3000);

    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.play().catch(() => {
    });
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showHero && (
        <div className="hero-overlay">
          <h1>ASTROMOTION</h1>
          <p>Explore The Solar System</p>
        </div>
      )}

      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={2} />
        <SpaceScene />
        <CameraController />
      </Canvas>
      <HandTracker />

      <audio
        ref={audioRef}
        src="/audio/space-ambience.mp3"
        loop
        autoPlay
        controls
      />
    </>
  );
}
