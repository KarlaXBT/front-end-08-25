import React, { useState } from "react";

function Contact() {
  const [aadress, setAadress] = useState("Tallinn");
  const [telefon, setTelefon] = useState("5512345");
  const [email, setEmail] = useState("bla@baa.com");
  const [ingliseKeelne, setIngliseKeelne] = useState("ei");

  function ingliseks() {
    setAadress("London");
    setTelefon("12312412");
    setEmail("london@london.com");
    setIngliseKeelne("jah");
  }
  return (
    <div>
      <div>{aadress}</div>
      <div>{telefon}</div>
      <div>{email}</div>
      <button onClick={ingliseks}>Muuda inglise keelseks</button>
      {ingliseKeelne === "jah" && <div>eng</div>}
    </div>
  );
}

export default Contact;
