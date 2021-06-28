import { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState();
  const [currentTime, setCurrentTime] = useState();
  const [currentDateTime, setCurrentDateTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setCurrentDay(date.toLocaleDateString(
      undefined,
      {
        weekday: "long",
        day: "numeric",
        month: "long",
      }));

      setCurrentTime(date.toLocaleTimeString());

      setCurrentDateTime(date.toJSON());
  }, [date]);

    return (
      <p className="form__time">
        Dzisiaj jest{" "}
        <time dateTime={currentDateTime}>
          {currentDay}, {currentTime}
        </time>
      </p>
    );
};

export default Time;