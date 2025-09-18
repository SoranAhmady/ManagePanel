import { useEffect, useState } from "react";

function useTimer(time = 2) {
  const [timer, setTimer] = useState(time * 60);

  useEffect(() => {
    const decrementTime = setInterval(() => {
      setTimer(prev => {
        if (prev <= 0) {
          clearInterval(decrementTime);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(decrementTime); 
  }, []);

  const min = Math.floor(timer / 60);
  const sec = timer % 60;

  return { min, sec };
}

export default useTimer;
