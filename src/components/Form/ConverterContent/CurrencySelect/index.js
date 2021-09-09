import { GridContainer } from "../GridContainer";
import { InputDescription } from "../InputDescription";
import { InputField } from "../InputField";

const CurrencySelect = ({ description, currency, onCurrencyChange, exchangeRateAPI }) => {
  const currencies = Object.keys(exchangeRateAPI.rates);

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
};

export default CurrencySelect;