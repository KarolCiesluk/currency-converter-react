import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";

const theme = {
  headerColors: {
    background: "#2f4858f7", // color 2a(turkusowy)
    text: "#fcfcfc", // color 1(białawy)
  },
  formColors: {
    shadow: "#7a7a7a", // color 3 (szary)
    background: "#f2f3f4d9", // color 8 (jasny szary)
    formControlsColors: {
      inputBackground: "#fcfcfc", // color 1 (białawy)
      inputText: "#2F4858", // color 2b (turkusowy)
      inputFocus: "hsl(208deg 100% 30%)", // color 5a (granatowy)
      customRateBackground: "transparent", // color 6 (transparent)
    },
    linkColors: {
      text: "hsl(208deg 100% 30%)", // color 5a (granatowy)
      active: "hsl(208deg 100% 45%)", // color 5b (jasny granatowy/niebieski)
    },
    resultColors: {
      text: "hsl(3, 63%, 48%)", // color 7a (pomarańczowy)
    },
    submitButtonColors: {
      text: "#fcfcfc", // color 1 (białawy)
      background: "hsl(3, 63%, 48%)", // color 7a (pomarańczowy)
      hover: "hsl(3deg 100% 50%)", // color 7b? (jasny pomarańcz)
      focus: "hsl(3deg 100% 50%)", // color 7b? (jasny pomarańcz)
      active: "hsl(3, 63%, 58%)", // color 7c? (bardzo jasny pomarańcz)
    }
  },
  footerColors: {
    border: "hsl(3, 63%, 48%)",  // color 7a (pomarańczowy)
    text: "hsl(3, 63%, 48%)", // color 7a (pomarańczowy)
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
