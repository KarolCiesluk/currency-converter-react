import { Wrapper } from "./styled";

const Result = ({ resultData }) => (
  <Wrapper>
    {
      resultData && `
        ${resultData.myAmount}${resultData.myCurrency} =
        ${" "}${resultData.finalAmount}${resultData.wantedCurrency}
      `
    }
  </Wrapper>
);

export default Result;