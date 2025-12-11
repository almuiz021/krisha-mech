import { useState, useEffect } from "react";

export function useSlideshow(images, intervalTime = 3000) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images, intervalTime]);

  return currentImageIndex;
}
