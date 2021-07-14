import MyAmount from "./MyAmount";
import CurrencySelect from "./CurrencySelect";
import ExchangeRateChoice from "./ExchangeRateChoice";
import ExchangeRatesInfo from "./ExchangeRatesInfo";
import SubmitButton from "./SubmitButton";
import Result from "./Result";

const ConverterContent = ({
  myAmount,
  setMyAmount,
  myCurrency,
  onMyCurrencyChange,
  wantedCurrency,
  onWantedCurrencyChange,
  isCustomRate,
  onRateOptionChange,
  customRate,
  setCustomRate,
  resultData,
  exchangeRateAPI,
}) => (
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
      exchangeRatesAPI={exchangeRateAPI}
    />
    <CurrencySelect
      description="Przelicz na:"
      currency={wantedCurrency}
      onCurrencyChange={onWantedCurrencyChange}
      exchangeRatesAPI={exchangeRateAPI}
    />
    <ExchangeRateChoice
      isCustomRate={isCustomRate}
      onRateOptionChange={onRateOptionChange}
      customRate={customRate}
      setCustomRate={setCustomRate}
    />
    <ExchangeRatesInfo exchangeRateAPI={exchangeRateAPI} />
    <SubmitButton buttonText="Przelicz!" />
    <Result resultData={resultData} />
  </>
);

export default ConverterContent;