import { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="form__time">
      Dzisiaj jest{" "}
      <time dateTime={date.toJSON()}>
        {date.toLocaleDateString(
          undefined,
          {
            weekday: "long",
            day: "numeric",
            month: "long",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }
        )}
      </time>
    </p>
  );
};

export default Time;