const ExchangeRatesInfo = (props) => (
    <p>Kursy walut pobierane są z Europejskiego Banku Centralnego. Aktualne na dzień: {props.exchangeRateAPI.date}</p>
);

export default ExchangeRatesInfo;