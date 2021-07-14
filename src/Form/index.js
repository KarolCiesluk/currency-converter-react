import { useState } from "react";
import Clock from "./Clock";
import ConverterContent from "./ConverterContent";
import Message from "./Message";
import { FormContainer } from "./styled";
import { useExchangeRateAPI } from "./useExchangeRateApi";

const Form = () => {
  const [myAmount, setMyAmount] = useState("");
  const [myCurrency, setMyCurrency] = useState("PLN");
  const [wantedCurrency, setWantedCurrency] = useState("EUR");
  const [isCustomRate, setIsCustomRate] = useState(false);
  const [customRate, setCustomRate] = useState("");
  const [resultData, setResultData] = useState();

  const [exchangeRateAPI, isError] = useExchangeRateAPI();

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

    let wantedCurrencyRate;
    let myCurrencyRate;

    const exchangeRatesList = exchangeRateAPI.rates;

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
  //
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
      {exchangeRateAPI ?
        <ConverterContent
          myAmount={myAmount}
          setMyAmount={setMyAmount}
          myCurrency={myCurrency}
          onMyCurrencyChange={onMyCurrencyChange}
          wantedCurrency={wantedCurrency}
          onWantedCurrencyChange={onWantedCurrencyChange}
          isCustomRate={isCustomRate}
          onRateOptionChange={onRateOptionChange}
          customRate={customRate}
          setCustomRate={setCustomRate}
          resultData={resultData}
          exchangeRateAPI={exchangeRateAPI}
        /> :
        <Message isError={isError} />
      }

    </FormContainer>
  );
};

export default Form;