import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token_backend as token } from "../../../declarations/token_backend/index";

function Balance() {
  const [inputValue, setInput] = useState("");
  const [balanceResult, setBalance] = useState("");
  const [symbol, setSymbol] = useState("");

  async function handleClick() {
    const principal = Principal.fromText(inputValue);
    const balance = await token.balanceOf(principal);
    setBalance(balance.toLocaleString());
    setSymbol(await token.getSymbol());
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => { setInput(e.target.value) }}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      {balanceResult && <p>This account has a balance of<span id="balance"> {balanceResult} {symbol}.</span></p>}

    </div>
  );
}

export default Balance;
