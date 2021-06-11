import { useState } from "react";
import "./style.css";

const Form = () => {
    const [myAmount, setMyAmount] = useState("");
    const [myCurrency, setMyCurrency] = useState("PLN");
    const [wantedCurrency, setWantedCurrency] = useState("EUR");
    const [rateOption, setRateOption] = useState("defaultRate");
    const [customRate, setCustomRate] = useState("");
    const [resultText, setResultText] = useState("");

    const defaultRates = [
        {
            name: "EUR",
            rate: 4.5654,
        },
        {
            name: "NOK",
            rate: 0.4588,
        },
        {
            name: "USD",
            rate: 3.7746,
        },
        {
            name: "PLN",
            rate: 1,
        }
    ];

    const calculateExchangeRate = () => {
        return customRate ?
            customRate :
            (defaultRates.find(({ name }) => name === wantedCurrency).rate) /
            (defaultRates.find(({ name }) => name === myCurrency).rate);
    };

    const calculateResult = () => {
        const result = (myAmount / calculateExchangeRate());
        return Number.isInteger(result) ? result : result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const finalAmount = calculateResult();
        setResultText(`${myAmount} ${myCurrency} = ${finalAmount} ${wantedCurrency}`);
    };

    const onRateOptionChange = ({ target }) => {
        const chosenRateOption = target.value;
        setRateOption(chosenRateOption);

        if (chosenRateOption === "defaultRate") {
            setCustomRate("");
        }
    };

    const onMyCurrencyChange = ({ target }) => {
        const previousMyCurrency = myCurrency;
        setMyCurrency(target.value);

        if (target.value === wantedCurrency) {
            setWantedCurrency(previousMyCurrency);
        }
    };

    const onWantedCurrencyChange = ({ target }) => {
        const previousWantedCurrency = wantedCurrency;
        setWantedCurrency(target.value);

        if (target.value === myCurrency) {
            setMyCurrency(previousWantedCurrency);
        }
    };

    return (
        <form onSubmit={onFormSubmit} className="form">
            <p>
                <label className="form__gridContainer">
                    <strong className="form__myAmountDescription">
                        Kwota:
                    </strong>
                    <input
                        value={myAmount}
                        onChange={({ target }) => setMyAmount(target.value)}
                        className="form__inputField form__inputField--myAmount"
                        type="number"
                        min="1"
                        step="0.01"
                        autoFocus
                        required
                    />
                </label>
            </p>
            <p>
                <label className="form__gridContainer">
                        Przelicz z:
                    <select
                        value={myCurrency}
                        onChange={onMyCurrencyChange}
                        className="form__inputField"
                    >
                        <option value="EUR">EUR - Euro</option>
                        <option value="NOK">NOK - Korona norweska</option>
                        <option value="USD">USD - Amerykański dolar</option>
                        <option value="PLN">PLN - Polski złoty</option>
                    </select>
                </label>
            </p>
            <p>
                <label className="form__gridContainer">
                        Przelicz na:
                    <select
                        value={wantedCurrency}
                        onChange={onWantedCurrencyChange}
                        className="form__inputField"
                    >
                        <option value="EUR">EUR - Euro</option>
                        <option value="NOK">NOK - Korona norweska</option>
                        <option value="USD">USD - Amerykański dolar</option>
                        <option value="PLN">PLN - Polski złoty</option>
                    </select>
                </label>
            </p>
            <p  className="form__gridContainer">
                <label
                    htmlFor="selectRate"
                    className="form__screenReaderOnly"
                >
                    Ustawienia kursu
                </label>
                <select
                    value={rateOption}
                    onChange={onRateOptionChange}
                    id="selectRate"
                    className="form__inputField"
                >
                    <option value="defaultRate">Kurs domyślny</option>
                    <option value="customRate">Kurs własny</option>
                </select>
                <label
                    htmlFor="customRate"
                    className="form__screenReaderOnly"
                >
                    Wysokość kursu
                </label>
                <input
                    value={customRate}
                    onChange={({ target }) => setCustomRate(target.value)}
                    id="customRate"
                    className="form__inputField form__inputField--customRate"
                    type="number"
                    min="0.01"
                    step="0.0001"
                    disabled={rateOption === "defaultRate" ? true : false}
                    required
                />
            </p>
            <p className="form__linkParagraph">
                <a
                    className="form__link"
                    href="https://www.money.pl/pieniadze/nbp/srednie/"
                    target="_blank"
                    title="Kursy walut money.pl"
                    rel="noreferrer noopener"
                >
                    Zobacz
                    tabelę kursów NBP
                </a> (otwiera się w nowej karcie)
            </p>
            <p>
                <button className="form__button">Przelicz!</button>
            </p>
            <p className="form__result">{resultText}</p>
        </form>
    );
};

export default Form;