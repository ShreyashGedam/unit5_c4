import { useState } from "react";
import { Navigate } from "react-router-dom";

export const Login = () => {

  const [text , setText] = useState("")
  const [rpass , setRpass] = useState("")

  async function role()
  {
    var res = await fetch("http://localhost:8080/users")
    var data = await res.json()
    // console.log(text) 
    // console.log(rpass)
    
    for(var i=0 ; i<data.length ; i++)
    {
      if(data[i].username == text && data[i].pass == rpass)
      {
        if(data[i].role == "admin")
        {
          // console.log(data[i].role , data[i].pass)
          return <Navigate to ="/orders"  ></Navigate>
        }
        else
        {
          return <Navigate to ="/neworder"></Navigate>
        }
      }  
    }
   
  }

  

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={ (e) =>
        {
          setText( e.target.value)
        } }

      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={ (e) =>
          {
            setRpass( e.target.value)
          } }
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={ () =>role() }>Login</button>
    </div>
  );
};
