import { useState } from "react";
import React from "react";
import "./simpleForm.css";
// import "./";
const SimpleForm = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [valid, setVaild] = useState(false);
  const [sumbitted, setSumbitted] = useState(false);
  const handleFirstNameInputChange = (event) => {
    setContact({ ...contact, firstName: event.target.value });
  };
  const handleLastNameInputChange = (event) => {
    setContact({ ...contact, lastName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setContact({ ...contact, email: event.target.value });
  };
  const validation = () => {
    if (
      contact.firstName.includes(" ") ||
      contact.lastName.includes(" ") ||
      !contact.email.includes("@")
    )
      setVaild(false);
    setVaild(true);
  };
  const handleSumbit = (event) => {
    event.preventDefault();
    setSumbitted(true);
    validation();
    console.log(`sumbitted ${sumbitted} valid ${valid}`);
  };

  return (
    <div className="simple-form">
      <div className="form-container">
        <form className="register-form" onSubmit={handleSumbit}>
          {sumbitted && valid ? (
            <div className="success-meesage">Success!</div>
          ) : null}
          <label>First Name</label>
          <input
            value={contact.firstName}
            type="text"
            className="form-filed"
            onChange={handleFirstNameInputChange}
          />
          {sumbitted && !contact.firstName ? (
            <span>Please enter a first name</span>
          ) : null}
          <label>Last Name</label>
          <input
            value={contact.lastName}
            type="text"
            className="form-filed"
            onChange={handleLastNameInputChange}
          />
          {sumbitted && !contact.lastName ? (
            <span>Please enter a last name</span>
          ) : null}
          <label>Email</label>
          <input
            value={contact.email}
            type="text"
            className="form-filed"
            onChange={handleEmailInputChange}
          />
          {sumbitted && !contact.email ? (
            <span>Please enter an email</span>
          ) : null}

          <button type="sumbit">Sumbit</button>
        </form>
      </div>
    </div>
  );
};
export default SimpleForm;
