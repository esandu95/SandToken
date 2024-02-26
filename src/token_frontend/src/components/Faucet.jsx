import React, { useState } from "react";
import { canisterId, createActor } from "../../../declarations/token_backend/index";
import { AuthClient } from "../../../../node_modules/@dfinity/auth-client/lib/cjs/index";



function Faucet() {
  const [isDisabled, setDisabled] = useState("");
  const [buttonText, setText] = useState("Gimme Gimme");
  const [logedIn, setLoged] = useState("");
  const [principal, setPrincipal] = useState("");

  async function handleClick(event) {
    setDisabled(true);
    // use the identity(lines 29-41) to make authenticated calls using the @dfinity/agent Actor.
    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      }
    })

    const result = await authenticatedCanister.payOut();
    setText(result);
  };

  async function handleLogIn() {
    // To get started with auth client, run
    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();


    // The authClient can log in with
    await authClient.login({
      onSuccess: async () => {
        handleAuthenticated(authClient);
      },
    });
    async function handleAuthenticated(authClient) {
      const principal = await identity.getPrincipal().toString();
      setPrincipal(principal);
      setLoged(true);
    }
    // It opens an identity.ic0.app window, saves your delegation to localStorage, and then sets you up with an identity.
  };



  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>

      {!logedIn
        ? <label>Get your free SAND tokens !<button id="log-in" onClick={handleLogIn}>LOGIN</button> to claim 10,000 SAND to your account.</label>
        : <label>You AUTHENTICATED! Your account Principal is: <br /><span id="principal">{principal}</span></label>}

      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
