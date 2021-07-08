import MyAmount from "./MyAmount";
import CurrencySelect from "./CurrencySelect";
import ExchangeRateChoice from "./ExchangeRateChoice";

const FormControls = ({
    myAmount,
    setMyAmount,
    myCurrency,
    onMyCurrencyChange,
    wantedCurrency,
    onWantedCurrencyChange,
    isCustomRate,
    onRateOptionChange,
    customRate,
    setCustomRate
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
    </>
);

export default FormControls;