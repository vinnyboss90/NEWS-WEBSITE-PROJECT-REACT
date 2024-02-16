import { useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  
 
  const register = async () => {
    
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }

    setRegisterEmail("")
    setRegisterPassword("")
  };

  

  

  return (
    <div className="App">
      <div>

    
    <h3> Sign Up </h3>
        
        <input
          placeholder="Enter Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Enter Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Sign Up </button>

   
        
      </div>

      <div>
    
        

      </div>

     
    </div>
  );
}

export default Signup