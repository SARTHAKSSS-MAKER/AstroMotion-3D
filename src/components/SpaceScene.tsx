import { Stars, useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


export default function SpaceScene() {
const sunRef = useRef<THREE.Mesh>(null);
const mercuryRef = useRef<THREE.Mesh>(null);
const venusRef = useRef<THREE.Mesh>(null);
const earthRef = useRef<THREE.Mesh>(null);
const moonRef = useRef<THREE.Mesh>(null);
const earthTexture = useTexture("/textures/earth.jpg");
const moonTexture = useTexture("/textures/moon.jpg");
const mercuryTexture = useTexture("/textures/mercury.jpg");
const venusTexture = useTexture("/textures/venus.jpg");
const marsTexture = useTexture("/textures/mars.jpg");
const jupiterTexture = useTexture("/textures/jupiter.jpg");
const saturnTexture = useTexture("/textures/saturn.jpg");
const RingTexture = useTexture("/textures/saturn_ring1.jpg");
const uranusTexture = useTexture("/textures/uranus.jpg");
const neptuneTexture = useTexture("/textures/neptune.jpg");
const sunTexture = useTexture("/textures/sun1.jpg");
const marsRef = useRef<THREE.Mesh>(null);
const jupiterRef = useRef<THREE.Mesh>(null);
const saturnRef = useRef<THREE.Mesh>(null);
const ringRef = useRef<THREE.Mesh>(null);
const uranusRef = useRef<THREE.Mesh>(null);
const neptuneRef = useRef<THREE.Mesh>(null);

 useFrame(() => {
  if (sunRef.current) {
    sunRef.current.rotation.y += 0.005;
  }

  if (mercuryRef.current) {
    mercuryRef.current.rotation.y += 0.01;
  }

  if (venusRef.current) {
    venusRef.current.rotation.y += 0.008;
  }

  if (earthRef.current) {
    earthRef.current.rotation.y += 0.009;
  }

  if (moonRef.current && earthRef.current) {
    const time = Date.now() * 0.001;

    moonRef.current.position.x =
      earthRef.current.position.x + Math.cos(time) * 12;

    moonRef.current.position.z =
      earthRef.current.position.z + Math.sin(time) * 12;
  }

  if (marsRef.current) {
    marsRef.current.rotation.y += 0.018;
  }

  if (jupiterRef.current) {
    jupiterRef.current.rotation.y += 0.04;
  }

  if (saturnRef.current) {
    saturnRef.current.rotation.y += 0.03;
  }

  if (ringRef.current) {
    ringRef.current.rotation.z += 0.005;
  }

  if (uranusRef.current) {
    uranusRef.current.rotation.y += 0.015;
  }

  if (neptuneRef.current) {
    neptuneRef.current.rotation.y += 0.014;
  }
});

  return (
    <>
     <Stars
  radius={100}
  depth={500}
  count={100000}
  factor={8}
  saturation={0}
  fade
  speed={1}
/>
      {/* Sun */}
      <mesh ref={sunRef} position={[0, 0, -50]}>
        <sphereGeometry args={[15, 64, 64]} />
        <meshStandardMaterial
  map={sunTexture}
  //emissive="#ffaa00"
  //emissiveIntensity={1}
/>      </mesh>

      {/* Mercury */}
      <mesh ref={mercuryRef} position={[0, 0, -120]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial map={mercuryTexture} />
      </mesh>

      {/* Venus */}
      <mesh ref={venusRef} position={[0, 0, -190]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial map={venusTexture} />
      </mesh>

      {/* Earth */}
      <mesh ref={earthRef} position={[0, 0, -260]}>
        <sphereGeometry args={[4.5, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>

      {/* Moon */}
      <mesh ref={moonRef} position={[15, 0, -260]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={moonTexture} />
      </mesh>

      {/* Mars */}
      <mesh ref={marsRef} position={[0, 0, -330]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshStandardMaterial map={marsTexture} />
      </mesh>

      {/* Jupiter */}
      <mesh ref={jupiterRef} position={[0, 0, -400]}>
        <sphereGeometry args={[9, 64, 64]} />
        <meshStandardMaterial map={jupiterTexture} />
      </mesh>

      {/* Saturn */}
      <mesh ref={saturnRef} position={[0, 0, -470]}>
        <sphereGeometry args={[8, 64, 64]} />
        <meshStandardMaterial map={saturnTexture} />
      </mesh>

      {/* Ring */}
      <mesh ref={ringRef} position={[0, 0, -470]}
       rotation={[Math.PI / 2.5, 0, 0]}>
        <ringGeometry args={[15, 25, 64]} />
        <meshBasicMaterial
          map={RingTexture}
        />
      </mesh>

      {/* Uranus */}
      <mesh ref={uranusRef} position={[0, 0, -540]}>
        <sphereGeometry args={[6, 64, 64]} />
        <meshStandardMaterial map={uranusTexture} />
      </mesh>

      {/* Neptune */}
      <mesh ref={neptuneRef} position={[0, 0, -610]}>
        <sphereGeometry args={[6, 64, 64]} />
        <meshStandardMaterial map={neptuneTexture} />
      </mesh>
    </>
  );
}