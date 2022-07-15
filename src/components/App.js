import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = false ? "App dark" : "App light"
  

  const [isDark, setIsDark] =useState(false)

  function changeDarkMode(){
    setIsDark ((isDark) => !isDark)
  }
  

  return (
    <div className={"App" + (isDark ? "dark" :"light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeDarkMode}> {isDark ? "Dark" :"Light" }Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
