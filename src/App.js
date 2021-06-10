import Header from "./Header";



function App() {
  return (
    <>
      <Header />
      <main className="main">
        <form className="form js-form">
          <p>
            <label>
              <strong className="form__inputDescription form__inputDescription--myAmount">Kwota:</strong>
              <input className="form__inputField form__inputField--myAmount js-form__myAmount" type="number" min="1" step="0.01"
                autoFocus required />
            </label>
          </p>
          <p>
            <label>
              <span className="form__inputDescription">Przelicz z:</span>
              <select className="form__inputField js-form__myCurrency">
                <option value="EUR">EUR - Euro</option>
                <option value="NOK">NOK - Korona norweska</option>
                <option value="USD">USD - Amerykański dolar</option>
                <option value="PLN" selected>PLN - Polski złoty</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              <span className="form__inputDescription">Przelicz na:</span>
              <select className="form__inputField js-form__wantedCurrency">
                <option value="EUR" selected>EUR - Euro</option>
                <option value="NOK">NOK - Korona norweska</option>
                <option value="USD">USD - Amerykański dolar</option>
                <option value="PLN">PLN - Polski złoty</option>
              </select>
            </label>
          </p>
          <p>
            <label htmlFor="selectRate" className="form__screenReaderOnly">Ustawienia kursu</label>
            <select id="selectRate" className="form__inputField form__inputField--select js-form__selectRate">
              <option value="defaultRate" selected>Kurs domyślny</option>
              <option value="ownRate">Kurs własny</option>
            </select>
            <label htmlFor="exchangeRate" className="form__screenReaderOnly">Wysokość kursu</label>
            <input id="exchangeRate" className="form__inputField form__inputField--notAllowed js-form__exchangeRate"
              type="number" min="0.01" step="0.0001" disabled required />
          </p>
          <p className="form__paragraphLink">
            <a className="form__link" href="https://www.money.pl/pieniadze/nbp/srednie/" target="_blank"
              title="Kursy walut money.pl" rel="noreferrer noopener">Zobacz
              tabelę kursów NBP
        </a> (otwiera się w nowej karcie)
      </p>
          <p>
            <button className="form__button">Przelicz!</button>
          </p>
          <p className="form__result js-form__finalResult"></p>
        </form>
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2021 Karol Cieśluk</p>
      </footer>
    </>
  );
}

export default App;
