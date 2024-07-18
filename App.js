import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Button(props) {
  return <button onClick={props.onButtonClick}>{props.msg}</button>;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  function handleClick(i) {
    if (i == 0) {
      console.log(inputValue.toLowerCase());
      setInputValue(inputValue.toLowerCase());
    }
    if (i == 1) {
      const upperString = inputValue.toUpperCase();
      setInputValue(inputValue.toUpperCase());
    }
    if (i == 2) {
      var normalString = "";
      let lowerString = inputValue.toLowerCase();
      for (var i = 0; i < lowerString.length; i++) {
        if (i == 0) {
          normalString += lowerString.charAt(0).toUpperCase();
        } else if (lowerString[i] == " ") {
          normalString += " ";
          normalString += lowerString[++i].toUpperCase();
        } else {
          normalString += lowerString[i];
        }
      }
      setInputValue(normalString);
    }
  }

  return (
    <div className="container">
      <div className="search-container">
        <span>Input</span>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your Name"
        />
      </div>
      <div className="btn-container">
        <Button onButtonClick={() => handleClick(0)} msg="lower case" />
        <Button onButtonClick={() => handleClick(1)} msg="UPPER CASE" />
        <Button onButtonClick={() => handleClick(2)} msg="Normal Case" />
      </div>
      <div className="display-container">
        <p>{inputValue}</p>
      </div>
    </div>
  );
}

export default App;
