import { useState } from "react";
import { useExchangeRateAPI } from "./useExchangeRateApi";
import { FormContainer } from "./styled";
import Clock from "./Clock";
import Message from "./Message";
import MyAmount from "./MyAmount";
import CurrencySelect from "./CurrencySelect";
import ExchangeRateChoice from "./ConverterContent/ExchangeRateChoice";
import ExchangeRatesInfo from "./ExchangeRatesInfo";
import SubmitButton from "./SubmitButton";
import Result from "./Result";

const Form = () => {
  const [myAmount, setMyAmount] = useState("");
  const [myCurrency, setMyCurrency] = useState("PLN");
  const [wantedCurrency, setWantedCurrency] = useState("EUR");
  const [isCustomRate, setIsCustomRate] = useState(false);
  const [customRate, setCustomRate] = useState("");
  const [resultData, setResultData] = useState();
  const { status, rates, date } = useExchangeRateAPI();

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

    const exchangeRatesList = rates;
    let wantedCurrencyRate;
    let myCurrencyRate;

    for (const key in exchangeRatesList) {
      if (key === wantedCurrency) {
        wantedCurrencyRate = exchangeRatesList[key];
      }
      if (key === myCurrency) {
        myCurrencyRate = exchangeRatesList[key];
      }
    }

    return myCurrencyRate / wantedCurrencyRate;
  };

  const calculateResult = () => {
    return myAmount / calculateExchangeRate();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const finalAmount = calculateResult();

    setResultData({
      myAmount: +myAmount,
      myCurrency,
      finalAmount: +finalAmount,
      wantedCurrency,
    });
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <Clock />

      {status === "success" ?
        <>
          <MyAmount
            description="Kwota:"
            myAmount={myAmount}
            setMyAmount={setMyAmount}
          />
          <CurrencySelect
            description="Przelicz z:"
            currency={myCurrency}
            onCurrencyChange={onMyCurrencyChange}
            rates={rates}
          />
          <CurrencySelect
            description="Przelicz na:"
            currency={wantedCurrency}
            onCurrencyChange={onWantedCurrencyChange}
            rates={rates}
          />
          <ExchangeRateChoice
            isCustomRate={isCustomRate}
            onRateOptionChange={onRateOptionChange}
            customRate={customRate}
            setCustomRate={setCustomRate}
          />
          <ExchangeRatesInfo date={date} />
          <SubmitButton buttonText="Przelicz!" />
          <Result resultData={resultData} />
        </> :
        <Message status={status} />
      }

    </FormContainer>
  );
};

export default Form;