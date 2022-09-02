import { UseCart } from "./cartContext";
export function ProductListing() {
  const { addToCart, cartItems, setCartItems } = UseCart();

  function onClickHandler(event) {
    addToCart();
    const Vandal = event.target.nextSibling.innerText;
    let bool = cartItems.some((item) => item === Vandal);
    // for (let i = 0; i < vandalArray.length; i++) {
    //   console.log(vandalArray, Vandal);
    //   if (vandalArray[i] === Vandal) {
    //     console.log(vandalArray, Vandal);
    //     setBool(true);
    //     break;
    //   }
    // }
    if (bool === true) {
      setCartItems((guns) => [...cartItems]);
    } else setCartItems((guns) => [...cartItems, Vandal]);
  }
  console.log(cartItems);

  const Vandals = [
    { name: "Reaver", count: 0 },
    { name: "RGX", count: 0 },
    { name: "Forsaken", count: 0 },
    { name: "Elderflame", count: 0 },
    { name: "Gaia", count: 0 },
    { name: "Sentinels Of Light", count: 0 }
  ];
  return Vandals.map((item) => (
    <h2 key={item.name}>
      <button onClick={onClickHandler}>Add To Cart</button>
      <span>{item.name}</span>
    </h2>
  ));
}
