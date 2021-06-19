import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const formattedDate = date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <StyledClock>
      Dzisiaj jest {formattedDate}, &nbsp;{date.toLocaleTimeString()}
    </StyledClock>
  );
};
