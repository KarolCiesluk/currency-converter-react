import { Wrapper } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

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

const Clock = () => {
  const date = useCurrentDate();

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

export default Clock;