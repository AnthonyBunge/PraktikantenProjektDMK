import Password from "./Password";
import { useState } from "react";
import NewAccount from "./NewAccount";
import Main from "./Main";
function App() {
 const [user, setUser] = useState () 
 const [accountSwitch, setAccountSwitch] = useState ()

 return (
    <div className="App">
                   <button onClick={()=>setAccountSwitch(!accountSwitch)}>Create New Account</button>
                    
                   
          {user?<Main setUser={setUser}/>:( 
            !accountSwitch? <Password setUser={setUser}/>:<NewAccount/> 
          )}

          
    </div>
  );
}

export default App;
