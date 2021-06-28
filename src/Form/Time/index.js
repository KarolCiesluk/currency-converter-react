import { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();

      const currentDay = currentDate.toLocaleDateString(
        undefined,
        {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric"
        }
      );
      const currentTime = currentDate.toLocaleTimeString();
      const currentDateTime = currentDate.toJSON();
      
      setDate({
        currentDay,
        currentTime,
        currentDateTime,
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (date) {
    return (
      <p>
        Dzisiaj jest{" "}
        <time dateTime={date.currentDateTime}>
          {date.currentDay}, {date.currentTime}
        </time>
      </p>
    );
  }

  return <p></p>;
};

export default Time;