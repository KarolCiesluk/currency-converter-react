import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";

const theme = {
  headerColors: {
    background: "#2f4858f7", // color 2a?
    text: "#fcfcfc", // color 1
  },
  formColors: {
    shadow: "#7a7a7a", // color 3
    background: "#f2f3f4d9", // color 2b?
    formControlsColors: {
      inputBackground: "#fcfcfc", // color 1
      inputText: "#2F4858", // color 4
      inputFocus: "hsl(208deg 100% 30%)", // color 5a
      customRateBackground: "transparent", // color 6 (transparent)
    },
    linkColors: {
      text: "hsl(208deg 100% 30%)", // color 5a
      active: "hsl(208deg 100% 45%)", // color 5b
    },
    resultColors: {
      text: "hsl(3, 63%, 48%)", // color 7a
    },
    submitButtonColors: {
      text: "#fcfcfc", // color 1
      background: "hsl(3, 63%, 48%)", // color 7a
      hover: "hsl(3deg 100% 50%)", // color 7b?
      focus: "hsl(3deg 100% 50%)", // color 7b?
      active: "hsl(3, 63%, 58%)", // color 7c?
    }
  },
  footerColors: {
    border: "hsl(3, 63%, 48%)",  // color 7a
    text: "hsl(3, 63%, 48%)", // color 7a
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
