import Header from "./Header";
import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";

// const testTheme = {
//   headerColors: {
//     background: "#2f4858f7", // color 2a(turkusowy)
//     text: "#fcfcfc", // color 1(białawy)
//   },
//   formColors: {
//     shadow: "#7a7a7a", // color 3b (szary)
//     background: "#f2f3f4d9", // color 3a (jasny szary)
//     formControlsColors: {
//       inputBackground: "#fcfcfc", // color 1 (białawy)
//       inputText: "#2F4858", // color 2b (turkusowy)
//       inputFocus: "hsl(208deg 100% 30%)", // color 5a (granatowy)
//       customRateBackground: "transparent", // color 6 (transparent)
//     },
//     linkColors: {
//       text: "hsl(208deg 100% 30%)", // color 5a (granatowy)
//       active: "hsl(208deg 100% 45%)", // color 5b (jasny granatowy/niebieski)
//     },
//     resultColors: {
//       text: "hsl(3, 63%, 48%)", // color 7a (pomarańczowy)
//     },
//     submitButtonColors: {
//       text: "#fcfcfc", // color 1 (białawy)
//       background: "hsl(3, 63%, 48%)", // color 7a (pomarańczowy)
//       hover: "hsl(3deg 100% 50%)", // color 7b? (jasny pomarańcz)
//       focus: "hsl(3deg 100% 50%)", // color 7b? (jasny pomarańcz)
//       active: "hsl(3, 63%, 58%)", // color 7c? (bardzo jasny pomarańcz)
//     }
//   },
//   footerColors: {
//     border: "hsl(3, 63%, 48%)",  // color 7a (pomarańczowy)
//     text: "hsl(3, 63%, 48%)", // color 7a (pomarańczowy)
//   },
// };

/*
1 białawy "alabaster"
2 turkusowy (pickled bluewood)
  a) ciemny
  b) jasny 
3 szary (grey)
  a) jasny
  b) ciemny
5 niebieski (Endeavour)
  a) ciemny
  b) jasny
6 transparent
7 pomarańczowy (Persian Red)
  a) ciemny
  b) jasny
  c) bardzo jasny
*/

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
