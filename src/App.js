import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ListData from "./components/ListData";
import NavBar from "./components/NavBar";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
// console.log(cart)

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return
    setCart([...cart, item]);
  };

  const handleChange = (item,d) => {
    let indexs = cart.indexOf(item);
    let arr = cart;
    arr[indexs].amount +=d;
    if (arr[indexs].amount === 0) arr[indexs].amount=1;
    setCart([...arr]);
    // console.log(indexs)
  };
  return (
    <div className="App">
      <NavBar setShow={setShow} size={cart.length} />
      {show ? (
        <ListData handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
