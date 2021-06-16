import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header title="Kalkulator walutowy" />
      <Main>
        <Form />
      </Main>
      <Footer />
    </>
  );
}

export default App;
