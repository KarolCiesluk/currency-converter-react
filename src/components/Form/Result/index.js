import { Wrapper } from "./styled";

const Result = ({ resultData }) => (
  <Wrapper>
    {
      resultData && `
          ${resultData.myAmount.toFixed(2)}${resultData.myCurrency} =
          ${" "}${resultData.finalAmount.toFixed(2)}${resultData.wantedCurrency}
        `
    }
  </Wrapper>
);

export default Result;