import { GridContainer } from "../GridContainer";
import { InputDescription } from "../InputDescription";
import { InputField } from "../InputField";


const MyAmount = ({ description, myAmount, setMyAmount }) => (
    <GridContainer>
        <InputDescription myAmount>
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
