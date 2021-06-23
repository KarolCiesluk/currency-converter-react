const Result = ({ resultData }) => (
  <p className="form__result">
    {
      resultData
        && `${resultData.myAmount}${resultData.myCurrency} =
        ${" "}${resultData.finalAmount}${resultData.wantedCurrency}`      
    }
  </p>
);

export default Result;