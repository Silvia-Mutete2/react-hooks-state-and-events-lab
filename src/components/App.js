import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, setIsDark] = useState(false);

  function changeMode() {
    setIsDark((isDark) => !isDark);
  }

  return (
    <div className={"App " + (isDark ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>
          {isDark ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}
  

export default App;
