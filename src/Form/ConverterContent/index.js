import MyAmount from "./MyAmount";
import CurrencySelect from "./CurrencySelect";
import ExchangeRateChoice from "./ExchangeRateChoice";
import ExchangeRatesInfo from "./ExchangeRatesInfo";
// import Link from "./Link";
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
    exchangeRateAPI
}) => {
    const renderConverterContent = () => {
        switch (exchangeRateAPI) {
            case undefined:
                return <div>Czekaj</div>;
            case exchangeRateAPI.error:
                return <div>ERROR!!!</div>;
            default:
                return <>
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
                    {/* <Link /> */}
                    <SubmitButton buttonText="Przelicz!" />
                    <Result resultData={resultData} />
                </>;
        }
    };

    return (
        <div>{renderConverterContent()}</div>
    );
};

export default ConverterContent;