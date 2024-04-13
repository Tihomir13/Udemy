import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeContact(event) {
    const {name, value} = event.target;

    setContact(Previous => {
      if(name === "fName") {
        return {
          fName: value,
          lName: Previous.lName,
          email: Previous.email
        }
      }
      else if(name === "lName") {
        return {
          fName: Previous.fName,
          lName: value,
          email: Previous.email
        }
      }
      else if(name === "email") {
        return {
          fName: Previous.fName,
          lName: Previous.lName,
          email: value
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={changeContact}/>
        <input name="lName" placeholder="Last Name" onChange={changeContact}/>
        <input name="email" placeholder="Email" onChange={changeContact}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
