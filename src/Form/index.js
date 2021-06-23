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
  const [isCustomRate, setIsCustomRate] = useState(false);
  const [customRate, setCustomRate] = useState("");
  const [resultData, setResultData] = useState({});

  const onRateOptionChange = ({ target }) => {
    const chosenRateOption = (target.value === "true");
    setIsCustomRate(chosenRateOption);

    if (!chosenRateOption) {
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
    if (isCustomRate) {
      return customRate;
    }

    const wantedCurrencyRate = currencies.find(({ name }) => name === wantedCurrency).rate;
    const myCurrencyRate = currencies.find(({ name }) => name === myCurrency).rate;

    return wantedCurrencyRate / myCurrencyRate;
  };

  const calculateResult = () => {
    const result = myAmount / calculateExchangeRate();
    return result.toFixed(2);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const finalAmount = calculateResult();

    setResultData({
      ...resultData,
      myAmount,
      myCurrency,
      finalAmount,
      wantedCurrency,
    });
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
        isCustomRate={isCustomRate}
        onRateOptionChange={onRateOptionChange}
        customRate={customRate}
        setCustomRate={setCustomRate}
      />
      <Link />
      <SubmitButton buttonText="Przelicz!" />
      <Result resultData={resultData} />
    </form>
  );
};

export default Form;