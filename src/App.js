import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";

const theme = {
  headerColors: {
    background: "#2f4858f7",
    text: "#fcfcfc",
  },
  formColors: {
    shadow: "#7a7a7a",
    background: "#f2f3f4d9",
    formControlsColors: {
      inputBackground: "#fcfcfc",
      inputText: "#2F4858",
      inputFocus: "hsl(208deg 100% 30%)",
      customRateBackground: "transparent",
    },
    linkColors: {
      text: "hsl(208deg 100% 30%)",
      active: "hsl(208deg 100% 45%)",
    },
    resultColors: {
      text: "hsl(3, 63%, 48%)",
    },
    submitButtonColors: {
      text: "#fcfcfc",
      background: "hsl(3, 63%, 48%)",
      hover: "hsl(3deg 100% 50%)",
      focus: "hsl(3deg 100% 50%)",
      active: "hsl(3, 63%, 58%)",
    }
  },
  footerColors: {
    border: "hsl(3, 63%, 48%)",
    text: "hsl(3, 63%, 48%)",
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
