import React, { useState } from "react";

type Props = {
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const SwipeDetector = ({ onSwipeDown, onSwipeUp, ...props }: Props) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);

  const detectSwipeDirection = () => {
    if (touchStartX && touchEndX) {
      const touchDifference = touchEndX - touchStartX;
      const direction = touchDifference < 0 ? "top" : "bottom";
      setSwipeDirection(direction);
      console.log({ direction, swipeDirection, touchDifference });

      switch (direction) {
        case "top":
          onSwipeUp?.();
          break;
        case "bottom":
          onSwipeDown?.();
          break;
        default:
          break;
      }
      setSwipeDirection(null);
    }
  };

  return (
    <div
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientY)}
      onTouchEnd={(e) => {
        setTouchEndX(e.changedTouches[0].clientY);
        detectSwipeDirection();
      }}
      {...props}
    />
  );
};

export default SwipeDetector;
