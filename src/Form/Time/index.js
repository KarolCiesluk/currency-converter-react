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
    const currentDay = date.toLocaleDateString(
      undefined,
      {
        weekday: "long",
        day: "numeric",
        month: "long",
      }
    );
    const currentTime = date.toLocaleTimeString();
    const currentJSONDate = date.toJSON();

    setCurrentDateData({
      currentDay,
      currentTime,
      currentJSONDate,
    });
  }, [date]);

  return (
    <p className="form__time">
      Dzisiaj jest{" "}
      <time dateTime={currentDateData.currentJSONDate}>
        {currentDateData.currentDay}, {currentDateData.currentTime}
      </time>
    </p>
  );
};

export default Time;