import MyAmount from "./MyAmount";
import CurrencySelect from "./CurrencySelect";
import ExchangeRateChoice from "./ExchangeRateChoice";
import Link from "./Link";
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
    exchangeRatesAPI
}) => {
    const renderConverterContent = () => {
        switch (exchangeRatesAPI) {
            case undefined:
                return <div>Czekaj</div>;
            case exchangeRatesAPI.error:
                return <div>ERROR!!!</div>;
            default:
                return <>
                    <div>{exchangeRatesAPI.date}</div>
                    <MyAmount
                        description="Kwota:"
                        myAmount={myAmount}
                        setMyAmount={setMyAmount}
                    />
                    <CurrencySelect
                        description="Przelicz z:"
                        currency={myCurrency}
                        onCurrencyChange={onMyCurrencyChange}
                        exchangeRatesAPI={exchangeRatesAPI}
                    />
                    <CurrencySelect
                        description="Przelicz na:"
                        currency={wantedCurrency}
                        onCurrencyChange={onWantedCurrencyChange}
                        exchangeRatesAPI={exchangeRatesAPI}
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
                </>;
        }
    };

    return (
        <div>{renderConverterContent()}</div>
    );
};

export default ConverterContent;