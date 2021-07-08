const MyAmount = ({ description, myAmount, setMyAmount }) => (
    <label className="form__gridContainer">
        <span className="form__inputDescription form__inputDescription--myAmount">
            {description}
        </span>
        <input
            value={myAmount}
            onChange={({ target }) => setMyAmount(target.value)}
            className="form__inputField form__inputField--myAmount"
            type="number"
            min="1"
            step="0.01"
            autoFocus
            required
        />
    </label>
);

export default MyAmount;
