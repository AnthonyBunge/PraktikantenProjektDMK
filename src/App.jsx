import Password from "./Password";
import { useState } from "react";
import NewAccount from "./NewAccount";
import Main from "./Main";
function App() {
  const [user, setUser] = useState()
  const [accountSwitch, setAccountSwitch] = useState()

  return (
    <div className="App">
      {!user? <button id="app-switch-button" onClick={() => setAccountSwitch(!accountSwitch)}>{accountSwitch?"Back to Log-in":"Create a new Account"}</button>: <section></section>}

      {user ? 
      <Main setUser={setUser} /> 
      : (<div>{!accountSwitch ? <Password setUser={setUser} /> : <NewAccount />}</div>
      )}



    </div>
  );
}

export default App;
