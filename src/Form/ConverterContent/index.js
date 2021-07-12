import { useState, useEffect } from "react";
import MyAmount from "./MyAmount";
import CurrencySelect from "./CurrencySelect";
import ExchangeRateChoice from "./ExchangeRateChoice";
import Link from "./Link";
import SubmitButton from "./SubmitButton";
import Result from "./Result";

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
    resultData
}) => {
    const exchangeRatesAPI = useExchangeRateAPI();

    const renderConverterContent = (param) => {
        switch (param) {
            case "":
                return <div>Czekaj</div>;
            case "Error occured":
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
                    />
                    <CurrencySelect
                        description="Przelicz na:"
                        currency={wantedCurrency}
                        onCurrencyChange={onWantedCurrencyChange}
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
        <div>{renderConverterContent(exchangeRatesAPI)}</div>
    );
};

export default ConverterContent;