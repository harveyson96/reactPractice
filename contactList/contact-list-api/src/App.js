import "./App.css";
import React, { useEffect, useState } from "react";
import ContactCard from "./components/contactCard";
import SearchBar from "./components/searchBar";
import SimpleForm from "./components/simpleForm";
import NavBar from "./components/navBar";
import LoginBtn from "./components/loginBtn";
import LogoutBtn from "./components/logoutBtn";
import UserProfile from "./components/userProfile";
function App() {
  const [apiData, setApiData] = useState([]);
  let filterData = [];
  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const jsonData = await response.json();
      setApiData(jsonData.results);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value) => {
    setSearchTerm(value);
    console.log(`search for ${searchTerm}`);
  };

  const ContactCards = apiData
    .filter((contact) => {
      if (searchTerm === "") return contact;
      else if (
        contact.name.first
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      ) {
        return contact;
      }
    })
    .map((contact, index) => {
      return (
        <ContactCard
          key={index}
          imgUrl={contact.picture.medium}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      );
    });
  return (
    <>
      <NavBar />
      {/* <SearchBar handleSearch={handleSearch} />
      <SimpleForm />
      {ContactCards} */}
      <LoginBtn />
      <LogoutBtn />
      <UserProfile />
    </>
  );
}

export default App;
