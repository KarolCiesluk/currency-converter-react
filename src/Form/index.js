import { useState } from "react";
import "./style.css";

const Form = () => {
    const [result, setResult] = useState("");
    const [myAmount, setMyAmount] = useState("");
    const [myCurrency, setMyCurrency] = useState("PLN");
    const [wantedCurrency, setWantedCurrency] = useState("EUR");
    const [rateOption, setRateOption] = useState("defaultRate");
    const [exchangeRate, setExchangeRate] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        // setResult(calculateResult());
    };

    const onRateOptionChange = ({ target }) => {
        const chosenRateOption = target.value;
        setRateOption(chosenRateOption);

        if (chosenRateOption === "defaultRate") {
            setExchangeRate("");
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
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            <p>
                <label>
                    <strong className="form__inputDescription form__inputDescription--myAmount"
                    >
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
                <label>
                    <span className="form__inputDescription">
                        Przelicz z:
                    </span>
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
                <label>
                    <span className="form__inputDescription">Przelicz na:</span>
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
            <p>
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
                    className="form__inputField form__inputField--select"
                >
                    <option value="defaultRate">Kurs domyślny</option>
                    <option value="ownRate">Kurs własny</option>
                </select>
                <label
                    htmlFor="exchangeRate"
                    className="form__screenReaderOnly"
                >
                    Wysokość kursu
                </label>
                <input
                    value={exchangeRate}
                    onChange={({ target }) => setExchangeRate(target.value)}
                    id="exchangeRate"
                    className="form__inputField form__inputField--exchangeRate"
                    type="number"
                    min="0.01"
                    step="0.0001"
                    disabled={rateOption === "defaultRate" ? true : false}
                    required />
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
            <p className="form__result">{result}</p>
        </form>
    )
};

export default Form;