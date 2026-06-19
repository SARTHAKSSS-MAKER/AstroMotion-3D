import { useEffect } from "react";
import { Hands } from "@mediapipe/hands";

export default function HandTracker() {
  useEffect(() => {
    let lastY = 0;

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      const video = document.createElement("video");
      video.srcObject = stream;
      video.play();

      const hands = new Hands({
        locateFile: (file) =>
          `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
      });

      hands.setOptions({
        maxNumHands: 1,
        modelComplexity: 1,
        minDetectionConfidence: 0.7,
        minTrackingConfidence: 0.7,
      });

      hands.onResults((results) => {
        if (!results.multiHandLandmarks?.length) return;

        const wristY = results.multiHandLandmarks[0][0].y;

        if (lastY !== 0) {
          if (wristY < lastY - 0.03) {
            window.dispatchEvent(new Event("handUp"));
          }

          if (wristY > lastY + 0.03) {
            window.dispatchEvent(new Event("handDown"));
          }
        }

        lastY = wristY;
      });

      const detect = async () => {
        await hands.send({ image: video });
        requestAnimationFrame(detect);
      };

      detect();
    });
  }, []);

  return null;
}