import React, { useState, useEffect } from "react";

const FormValidation = () => {
  let [name, setName] = useState(""); // always remember to provide initial values
  let [email, setEmail] = useState("");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const handleName = (e) => {
    // to access the content of input, use value
    if (nameInput.value.length < 3) {
      console.log("name is too short");
    } else {
      setName(e.target.value);
      console.log(name);
    }
  };
  const handleEmail = (e) => {
    if (emailInput.validity.typeMismatch) {
      console.log("not a valid email address");
    } else {
      console.log("the email address is valid");
      setEmail(e.target.value);
      console.log(email);
    }
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    // Perform final form validation if needed
    if (name.length < 3) {
      console.log("Name is too short");
      return;
    }

    if (!email.includes("@")) {
      console.log("Invalid email address");
      return;
    }

    // Form is valid, submit the form or perform further actions
    console.log("Form submitted");
    // Additional logic for form submission
  };
  return (
    <div id="practice4">
      <form onSumbit={handleSumbit} action="/somewhere" method="post">
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleName}
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
          </li>
          <li>
            <label htmlFor="massages">Massages</label>
            <label htmlFor="">{name}</label>
            <label>{email}</label>
          </li>
          <li>
            <button id="sumbit" type="sumbit">
              Sumbit
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default FormValidation;
