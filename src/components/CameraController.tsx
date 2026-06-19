import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

export default function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(1100, 20, 250);

    gsap.to(camera.position, {
      x: 0,
      y: 0,
      z: 120,
      duration: 12,
      ease: "power3.inOut",
    });

    gsap.to({}, {
      duration: 12,
      onUpdate: () => {
        camera.lookAt(0, 0, -50);
      },
    });

    const handleWheel = (e: WheelEvent) => {
      gsap.to(camera.position, {
        z: camera.position.z + e.deltaY * 0.5,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const handleHandUp = () => {
      gsap.to(camera.position, {
        z: camera.position.z - 20,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const handleHandDown = () => {
      gsap.to(camera.position, {
        z: camera.position.z + 20,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("handUp", handleHandUp as EventListener);
    window.addEventListener("handDown", handleHandDown as EventListener);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("handUp", handleHandUp as EventListener);
      window.removeEventListener("handDown", handleHandDown as EventListener);
    };
  }, [camera]);

  return null;
}