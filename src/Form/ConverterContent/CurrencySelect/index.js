import { GridContainer, InputDescription, InputField } from "../styled";

const CurrencySelect = ({ description, currency, onCurrencyChange, exchangeRatesAPI }) => {
    const currencies = Object.keys(exchangeRatesAPI.rates);
    
    return (
        <GridContainer>
            <InputDescription>{description}</InputDescription>
            <InputField as="select"
                value={currency}
                onChange={onCurrencyChange}
            >
                {currencies.map(currencyName => (
                    <option key={currencyName} value={currencyName}>{currencyName}</option>
                ))}
            </InputField>
        </GridContainer>
    );
}

export default CurrencySelect;