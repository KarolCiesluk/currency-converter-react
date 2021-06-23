const Result = ({ resultData }) => {
    if (resultData.finalAmount) {
        return (
            <p className="form__result">
                {resultData.myAmount}{resultData.myCurrency} = {resultData.finalAmount}{resultData.wantedCurrency}
            </p>
        );
    }

    return null;
};

export default Result;