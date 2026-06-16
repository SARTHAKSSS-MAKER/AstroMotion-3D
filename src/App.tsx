import { Canvas } from "@react-three/fiber";
import SpaceScene from "./components/SpaceScene";
import CameraController from "./components/CameraController";

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={2} />
      <SpaceScene />
      <CameraController />
    </Canvas>
  );
}