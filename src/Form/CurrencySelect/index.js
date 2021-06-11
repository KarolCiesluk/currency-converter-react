const CurrencySelect = ({ description, currency, onCurrencyChange, currencies }) => (
    <p>
        <label className="form__gridContainer">
            <span className="form__inputDescription">{description}</span>
            <select
                value={currency}
                onChange={onCurrencyChange}
                className="form__inputField"
            >
                {currencies.map(({ name, fullName }) => (
                    <option key={name} value={name}>{name} - {fullName}</option>
                ))}
            </select>
        </label>
    </p>
);

export default CurrencySelect;