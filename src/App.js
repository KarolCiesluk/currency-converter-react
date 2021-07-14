import Header from "./Header";
import Main from "./Main";
import Form from "./Main/Form";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        Kalkulator walutowy
      </Header>
      <Main>
        <Form />
      </Main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
