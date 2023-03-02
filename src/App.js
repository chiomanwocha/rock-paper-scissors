/* eslint-disable no-undef */
import AppComp from "./components/AppComp";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '../src/app.css'

function App() {
  const colors = {
    brand: {
      scissorGradient1: "rgb(236, 158, 14)",
      scissorGradient2: "rgb(236, 169, 34)",
      paperGradient1: "rgb(72, 101, 244)",
      paperGradient2: "rgb(86, 113, 245)",
      rockGradient1: "rgb(220, 46, 78)",
      rockGradient2: "rgb(221, 64, 93)",
      lizardGradient1: "rgb(131, 79, 227)",
      lizardGradient2: "rgb(140, 93, 229)",
      cyan1: "rgb(64, 185, 206)",
      cyan2: "rgb(82, 190, 209)",
      darkText: "rgb(59, 67, 99)",
      scoreText: "rgb(42, 70, 192)",
      headerOutline: "rgb(96, 110, 133)",
    },
  };

  const theme = extendTheme({ colors });

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <AppComp />
      </ChakraProvider>
    </div>
  );
}

export default App;
