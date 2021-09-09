import { Wrapper, Link, Time } from "./styled";

const ExchangeRatesInfo = ({ date }) => (
  <Wrapper>
    Kursy walut pobierane są z{" "}
    <Link
      href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
      title="Kursy walut EBC"
    >
      Europejskiego Banku Centralnego
    </Link>.{" "}
    Aktualne na dzień: <Time>{date}</Time>
  </Wrapper>
);

export default ExchangeRatesInfo;