import { useState } from "react";
import "./style.css";
import { currencies } from "./currencies";
import MyAmount from "./MyAmount";
import CurrencySelect from "./CurrencySelect";
import ExchangeRateChoice from "./ExchangeRateChoice";
import Link from "./Link";
import SubmitButton from "./SubmitButton";
import Result from "./Result";

const Form = () => {
    const [myAmount, setMyAmount] = useState("");
    const [myCurrency, setMyCurrency] = useState("PLN");
    const [wantedCurrency, setWantedCurrency] = useState("EUR");
    const [rateOption, setRateOption] = useState("defaultRate");
    const [customRate, setCustomRate] = useState("");
    const [resultText, setResultText] = useState("");

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

    const calculateExchangeRate = () => {
        return customRate ?
            customRate :
            (currencies.find(({ name }) => name === wantedCurrency).rate) /
            (currencies.find(({ name }) => name === myCurrency).rate);
    };

    const calculateResult = () => {
        const result = myAmount / calculateExchangeRate();
        return Number.isInteger(result) ? result : result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const finalAmount = calculateResult();
        setResultText(`${myAmount} ${myCurrency} = ${finalAmount} ${wantedCurrency}`);
    };

    return (
        <form onSubmit={onFormSubmit} className="form">
            <MyAmount myAmount={myAmount} setMyAmount={setMyAmount} />
            <CurrencySelect
                description="Przelicz z:"
                currency={myCurrency}
                onCurrencyChange={onMyCurrencyChange}
                currencies={currencies}
            />
            <CurrencySelect
                description="Przelicz na:"
                currency={wantedCurrency}
                onCurrencyChange={onWantedCurrencyChange}
                currencies={currencies}
            />
            <ExchangeRateChoice
                rateOption={rateOption}
                onRateOptionChange={onRateOptionChange}
                customRate={customRate}
                setCustomRate={setCustomRate}
            />
            <Link />
            <SubmitButton buttonText="Przelicz!" />
            <Result resultText={resultText} />
        </form>
    );
};

export default Form;