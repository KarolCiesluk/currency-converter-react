import { useEffect, useState } from "react";
import { Wrapper } from "./styled";

const formatDate = (date) => {
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
};

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Wrapper>
      Dzisiaj jest
      {" "}
      <time dateTime={date.toJSON()}>
        {formatDate(date)}
      </time>
    </Wrapper>
  );
};

export default Time;