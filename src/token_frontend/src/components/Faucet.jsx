import React, { useState } from "react";
import { token_backend as token } from "../../../declarations/token_backend/index";


function Faucet() {
  const [isDisabled, setDisabled] = useState("");
  const [buttonText, setText] = useState("Gimme Gimme");

  async function handleClick(event) {
    setDisabled(true);
    const result = await token.payOut();
    setText(result);
  };

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free SAND tokens here! Claim 10,000 SAND coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
