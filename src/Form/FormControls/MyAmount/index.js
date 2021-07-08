import { GridContainer, InputDescription, InputField } from "./styled";

const MyAmount = ({ description, myAmount, setMyAmount }) => (
    <GridContainer>
        <InputDescription>
            {description}
        </InputDescription>
        <InputField
            value={myAmount}
            onChange={({ target }) => setMyAmount(target.value)}
            myAmount
            type="number"
            min="1"
            step="0.01"
            autoFocus
            required
        />
    </GridContainer>
);

export default MyAmount;
