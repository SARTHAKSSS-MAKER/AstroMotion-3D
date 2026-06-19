import { useEffect } from "react";

export default function HandTracker() {
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        console.log("Camera Started");

        window.addEventListener("wheel", (e) => {
          if (e.deltaY < 0) {
            console.log("HAND UP");
          } else {
            console.log("HAND DOWN");
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return null;
}