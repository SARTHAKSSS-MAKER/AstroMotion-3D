import { Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";


export default function SpaceScene() {
const sunRef = useRef<THREE.Mesh>(null);
const mercuryRef = useRef<THREE.Mesh>(null);
const venusRef = useRef<THREE.Mesh>(null);
const earthRef = useRef<THREE.Mesh>(null);
const moonRef = useRef<THREE.Mesh>(null);
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
    mercuryRef.current.rotation.y += 0.02;
  }

  if (venusRef.current) {
    venusRef.current.rotation.y += 0.015;
  }

  if (earthRef.current) {
    earthRef.current.rotation.y += 0.02;
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
    jupiterRef.current.rotation.y += 0.01;
  }

  if (saturnRef.current) {
    saturnRef.current.rotation.y += 0.01;
  }

  if (ringRef.current) {
    ringRef.current.rotation.z += 0.003;
  }

  if (uranusRef.current) {
    uranusRef.current.rotation.y += 0.012;
  }

  if (neptuneRef.current) {
    neptuneRef.current.rotation.y += 0.012;
  }
});

  return (
    <>
     <Stars
  radius={200}
  depth={600}
  count={3000}
  factor={8}
  saturation={0}
  fade
  speed={1}
/>
      {/* Sun */}
      <mesh ref={sunRef} position={[0, 0, -50]}>
        <sphereGeometry args={[12, 64, 64]} />
        <meshStandardMaterial
          color="#FDB813"
          emissive="#FDB813"
          emissiveIntensity={3}
          wireframe
        />
      </mesh>

      {/* Mercury */}
      <mesh ref={mercuryRef} position={[0, 0, -120]}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial color="gray" wireframe />
      </mesh>

      {/* Venus */}
      <mesh ref={venusRef} position={[0, 0, -220]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshStandardMaterial color="#d4a76a" wireframe />
      </mesh>

      {/* Earth */}
      <mesh ref={earthRef} position={[0, 0, -340]}>
        <sphereGeometry args={[7, 32, 32]} />
        <meshStandardMaterial color="#2E86DE"
        emissive="#2E86DE"
        emissiveIntensity={2}
        wireframe />
      </mesh>

      {/* Moon */}
      <mesh ref={moonRef} position={[15, 0, -340]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="lightgray" wireframe />
      </mesh>

      {/* Mars */}
      <mesh ref={marsRef} position={[0, 0, -470]}>
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial color="#C1440E" wireframe />
      </mesh>

      {/* Jupiter */}
      <mesh ref={jupiterRef} position={[0, 0, -650]}>
        <sphereGeometry args={[20, 64, 64]} />
        <meshStandardMaterial color="#D8CA9D" wireframe />
      </mesh>

      {/* Saturn */}
      <mesh ref={saturnRef} position={[0, 0, -850]}>
        <sphereGeometry args={[18, 64, 64]} />
        <meshStandardMaterial color="#E3C16F" wireframe />
      </mesh>

      {/* Ring */}
      <mesh ref={ringRef} position={[0, 0, -850]}
       rotation={[Math.PI / 2.5, 0, 0]}>
        <ringGeometry args={[25, 40, 64]} />
        <meshBasicMaterial
          color="#d8c28f"
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Uranus */}
      <mesh ref={uranusRef} position={[0, 0, -970]}>
        <sphereGeometry args={[14, 64, 64]} />
        <meshStandardMaterial color="#7FDBFF" wireframe />
      </mesh>

      {/* Neptune */}
      <mesh ref={neptuneRef} position={[0, 0, -1100]}>
        <sphereGeometry args={[14, 64, 64]} />
        <meshStandardMaterial color="#4169E1" wireframe />
      </mesh>
    </>
  );
}