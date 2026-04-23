import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  let [result, setResult] = useState("");
  const handleClick = (e) => {
  if (result.length >= 16) {
    setResult("!Large Input");
    setTimeout(() => {
      setResult("");
    }, 500);
    return;
  }
  const calculate = () => {
  try {
    result = eval(result).toString();
    if (result.includes(".")) {
      result = +eval(result);
      result = result.toFixed(4).toString();
    } else {
      result = eval(result).toString();
    }
    setResult(result);
  } catch (err) {
    setResult("Error");
  }
};

};

};
