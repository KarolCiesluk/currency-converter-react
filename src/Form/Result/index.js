const Result = ({ resultData }) => (
    <p className="form__result">
        {
            resultData.finalAmount
                ? `${resultData.myAmount}${resultData.myCurrency} = ${resultData.finalAmount}${resultData.wantedCurrency}`
                : ""
        }
    </p>
);

export default Result;