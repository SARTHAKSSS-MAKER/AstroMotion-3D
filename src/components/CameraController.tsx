import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

export default function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      gsap.to(camera.position, {
        z: camera.position.z - e.deltaY * 0.5,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [camera]);

  return null;
}
