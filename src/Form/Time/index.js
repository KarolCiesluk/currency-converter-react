import { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());
  const [currentDateData, setCurrentDateData] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const currentDateTime = date.toJSON();
    const currentTime = date.toLocaleTimeString();
    const currentDay = date.toLocaleDateString(
      undefined,
      {
        weekday: "long",
        day: "numeric",
        month: "long",
      });

    setCurrentDateData({
      currentDateTime,
      currentTime,
      currentDay,
    });
  }, [date]);

  return (
    <p className="form__time">
      Dzisiaj jest{" "}
      <time dateTime={currentDateData.currentDateTime}>
        {currentDateData.currentDay}, {currentDateData.currentTime}
      </time>
    </p>
  );
};

export default Time;