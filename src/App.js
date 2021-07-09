import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider>
      <Header>
        Kalkulator walutowy
      </Header>
      <Main>
        <Form />
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
