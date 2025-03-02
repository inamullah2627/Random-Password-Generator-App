import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./data/passChar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passwordLen, setPasswordLen] = useState(10);
  let [fPass, setFPass] = useState("");

  let creatPassword = () => {
    let finalPass = "";
    let charSet = "";
    // alert("Hello inam");
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (symbols) charSet += SC;
      // console.log(charSet);
      for (let i = 0; i < passwordLen; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      setFPass(finalPass);
    } else {
      alert("Please Select Atleast One CheckBox.....");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(fPass);
  };

  return (
    <>
      <div className="PasswordBox">
        <h2>Password Generator</h2>

        <div className="PasswordBoxIn">
          <input type="text" readOnly value={fPass} />{" "}
          <button onClick={copyPass}>Copy</button>
        </div>

        <div className="passLength">
          <label>Password Length</label>
          <input
            type="number"
            max={20}
            min={8}
            value={passwordLen}
            onChange={(event) => setPasswordLen(event.target.value)}
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
