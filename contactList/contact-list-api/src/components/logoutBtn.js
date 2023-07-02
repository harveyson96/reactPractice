import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "./button";
const LogoutBtn = () => {
  const { logout, isAuthenticated } = useAuth0();
  return isAuthenticated && <Button onClick={() => logout()}>Log Out</Button>;
};

export default LogoutBtn;
