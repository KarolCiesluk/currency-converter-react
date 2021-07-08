import { GridContainer, InputField, ScreenReaderLabel } from "../styled";

const ExchangeRateChoice = ({ isCustomRate, onRateOptionChange, customRate, setCustomRate }) => (
    <GridContainer as="p">
        <ScreenReaderLabel
            htmlFor="selectRate"
        >
            Ustawienia kursu
        </ScreenReaderLabel>
        <InputField as="select"
            value={isCustomRate}
            onChange={onRateOptionChange}
            id="selectRate"
            className="form__inputField"
        >
            <option value={false}>Kurs domyślny</option>
            <option value={true}>Kurs własny</option>
        </InputField>
        <ScreenReaderLabel
            htmlFor="customRate"
        >
            Wysokość kursu
        </ScreenReaderLabel>
        <InputField
            value={customRate}
            onChange={({ target }) => setCustomRate(target.value)}
            id="customRate"
            customRate
            type="number"
            min="0.01"
            step="0.0001"
            disabled={!isCustomRate}
            required
        />
    </GridContainer>
);

export default ExchangeRateChoice;