import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

function CountDown() {
  let a = 5;
  const [value, setValue] = useState<number>(10);
  const timeoutRef = useRef<any>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (value > 0 && !isPaused) {
      timeoutRef.current = setTimeout(() => {
        setValue(value - 1);
      }, 1000);
    };
    return () => {
      clearTimeout(timeoutRef.current);
    }
  }, [value, isPaused]);

  return (
    <div>
      {value}
      <Button
        onClick={() => {
          setValue(10);
        }}
      >
        Reset
      </Button>
      <Button
        onClick={() => {
          setIsPaused(!isPaused);
        }}
      >
        Pause/Resume
      </Button>
    </div>
  )
}

export default CountDown;
