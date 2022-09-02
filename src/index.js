import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./cartContext";
import { ThemeProvider } from "./theme-provider";
import { LocalProvider } from "./local-provider";
import App from "./App";
// function cartLogger() {
//   console.log("cartLogger");
// }
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LocalProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </LocalProvider>
  </StrictMode>,
  rootElement
);
