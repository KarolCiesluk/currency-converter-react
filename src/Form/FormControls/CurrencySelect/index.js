import { currencies } from "../../currencies";
import { GridContainer, InputDescription, InputField } from "../styled";

const CurrencySelect = ({ description, currency, onCurrencyChange }) => (
    <GridContainer>
        <InputDescription>{description}</InputDescription>
        <InputField as="select"
            value={currency}
            onChange={onCurrencyChange}
            className="form__inputField"
        >
            {currencies.map(({ name, fullName }) => (
                <option key={name} value={name}>{name} - {fullName}</option>
            ))}
        </InputField>
    </GridContainer>
);

export default CurrencySelect;