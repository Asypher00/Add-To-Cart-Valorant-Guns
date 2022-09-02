import { UseCart } from "./cartContext";
import { useLanguage } from "./local-provider";
import { langLibrary } from "./lang-library";
export function Cart() {
  const { items, cartItems } = UseCart();
  const { language } = useLanguage();
  return (
    <>
      <h1> {`${langLibrary[language]["Cart"]} ${items}`} </h1>
      {cartItems.map((vandal) => (
        <h4>{vandal}</h4>
      ))}
    </>
  );
}
