import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./data/passChar";

function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [passwordLen, setPasswordLen] = useState(10);
  const [fPass, setFPass] = useState("");

  const creatPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;
      for (let i = 0; i < passwordLen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFPass(finalPass);
    } else {
      alert("Please Select Atleast One CheckBox.....");
    }
  };

  const copyPass = () => {
    navigator.clipboard.writeText(fPass);
  };

  return (
    <>
      <div className="PasswordBox">
        <h2>Password Generator</h2>

        <div className="PasswordBoxIn">
          <input type="text" readOnly value={fPass} />

          <button onClick={copyPass}>Copy</button>
        </div>

        <div className="passLength">
          <label>Password Length</label>
          <input
            type="number"
            max={20}
            min={8}
            value={passwordLen}
            onChange={(event) => {
              let value = Number(event.target.value);

              // Ensure value stays within the allowed range
              if (value > 20) value = 20;
              if (value < 4) value = 4;

              setPasswordLen(value);
            }}
          />
        </div>

        <div className="passLength">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="passLength">
          <label>Include Lowercase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="passLength">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>

        <div className="passLength">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>

        <button className="btn" onClick={creatPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
