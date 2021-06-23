const ExchangeRateChoice = ({ isCustomRate, onRateOptionChange, customRate, setCustomRate }) => (
    <p className="form__gridContainer">
        <label
            htmlFor="selectRate"
            className="form__screenReaderOnly"
        >
            Ustawienia kursu
        </label>
        <select
            value={isCustomRate}
            onChange={onRateOptionChange}
            id="selectRate"
            className="form__inputField"
        >
            <option value={false}>Kurs domyślny</option>
            <option value={true}>Kurs własny</option>
        </select>
        <label
            htmlFor="customRate"
            className="form__screenReaderOnly"
        >
            Wysokość kursu
        </label>
        <input
            value={customRate}
            onChange={({ target }) => setCustomRate(target.value)}
            id="customRate"
            className="form__inputField form__inputField--customRate"
            type="number"
            min="0.01"
            step="0.0001"
            disabled={!isCustomRate}
            required
        />
    </p>
);

export default ExchangeRateChoice;