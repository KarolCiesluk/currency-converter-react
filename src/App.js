import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";

const theme = {
  alabaster: "#fcfcfc",
  pickledBluewood: {
    dark: "#2f4858f7",
    light: "#2F4858",
  },
  grey: {
    dark: "#7a7a7a",
    light: "#f2f3f4d9",
  },
  endeavour: {
    dark: "#005299",
    light: "#007ae6",
  },
  persianRed: {
    dark: "#c8352d",
    medium: "#ff0d00",
    light: "#d75750",
  },
};

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
}

export default App;
