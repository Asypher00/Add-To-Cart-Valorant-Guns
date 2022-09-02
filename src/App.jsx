import "./styles.css";
//import { UseCart } from "./cartContext";
import { ProductListing } from "./products";
import { Cart } from "./cart";
import { useTheme } from "./theme-provider";
import { Nav } from "./nav";

export default function App() {
  const { theme, setTheme } = useTheme();
  const onClickThemeChanger = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className={`App ${theme}`}>
      <h1 className="app-header">
        <button onClick={onClickThemeChanger}>Change Theme</button>eCommerce
        <div>
          <Nav></Nav>
        </div>
      </h1>
      <div className="app-body">
        <ProductListing />
        <Cart />
      </div>
    </div>
  );
}
