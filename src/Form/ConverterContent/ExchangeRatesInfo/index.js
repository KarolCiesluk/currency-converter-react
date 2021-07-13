import { Wrapper, Link } from "./styled";

const ExchangeRatesInfo = ({ exchangeRateAPI }) => (
    <Wrapper>
        Kursy walut pobierane są z{" "}
        <Link
            href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"
            title="Kursy walut money.pl"
        >
            Europejskiego Banku Centralnego
        </Link>.{" "}
        Aktualne na dzień: <b>{exchangeRateAPI.date}</b>
    </Wrapper>
);

export default ExchangeRatesInfo;