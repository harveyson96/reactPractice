import Raect, { useState, useEffect } from "react";
import "./contactCard.css";
const ContactCard = (props) => {
  const [showAge, setShowAnge] = useState(false);
  const handleAge = () => {
    setShowAnge(!showAge);
  };

  return (
    <div className="contact-card">
      <img src={props.imgUrl} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={handleAge}>Toggle Age</button>
        {showAge ? <p>Age: {props.age}</p> : null}
      </div>
    </div>
  );
};

export default ContactCard;
