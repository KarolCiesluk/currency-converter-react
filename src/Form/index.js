import { useState, useEffect } from "react";
import { currencies } from "./currencies";
import Time from "./Time";
import ConverterContent from "./ConverterContent";
import { FormContainer } from "./styled";

const useExchangeRateAPI = () => {
  const requestURL = 'https://api.exchangerate.host/latest';
  const [ratesAPI, setRatesAPI] = useState("");

  useEffect(() => {
      setTimeout(() => {
          (async () => {
              try {
                  const response = await fetch(requestURL);
                  if (!response.ok) {
                      throw new Error(response.statusText);
                  }
                  const rates = await response.json();
                  setRatesAPI(rates);
              } catch {
                  setRatesAPI("Error occured");
              }
          })();
      }, 1000);
  }, []);

  return ratesAPI;
};

const Form = () => {
  const [myAmount, setMyAmount] = useState("");
  const [myCurrency, setMyCurrency] = useState("PLN");
  const [wantedCurrency, setWantedCurrency] = useState("EUR");
  const [isCustomRate, setIsCustomRate] = useState(false);
  const [customRate, setCustomRate] = useState("");
  const [resultData, setResultData] = useState();

  const exchangeRatesAPI = useExchangeRateAPI();

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
  //
  const calculateResult = () => {
    const result = myAmount / calculateExchangeRate();
    return result.toFixed(2);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const finalAmount = calculateResult();

    setResultData({
      myAmount,
      myCurrency,
      finalAmount,
      wantedCurrency,
    });
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <Time />
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
        exchangeRatesAPI={exchangeRatesAPI}
      />
      {/* {
        typeof exchangeRatesAPI === "object" &&
        <>
          <div>{exchangeRatesAPI.date}</div>
          <FormControls
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
          />
          <Link />
          <SubmitButton buttonText="Przelicz!" />
          <Result resultData={resultData} />
        </>
      }
      {
        exchangeRatesAPI === "Error occured" &&
        <div>ERROR!!!</div>
      }
      {
        !exchangeRatesAPI &&
        <div>Czekaj</div>
      } */}
      {/* {
        exchangeRatesAPI ?
          exchangeRatesAPI === "Error occured" ?
            <div>ERROR!!!</div> :
            <>
              <div>{exchangeRatesAPI.date}</div>
              <FormControls
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
              />
              <Link />
              <SubmitButton buttonText="Przelicz!" />
              <Result resultData={resultData} />
            </> :
          <div>Czekaj</div>
      } */}
    </FormContainer>
  );
};

export default Form;