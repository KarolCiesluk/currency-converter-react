import { Wrapper, CurrencyRates } from "./styled";

const Link = () => (
    <Wrapper>
        <CurrencyRates
            href="https://www.money.pl/pieniadze/nbp/srednie/"
            target="_blank"
            title="Kursy walut money.pl"
            rel="noreferrer noopener"
        >
            Zobacz
            tabelę kursów NBP
        </CurrencyRates> (otwiera się w nowej karcie)
    </Wrapper>

);

export default Link;