import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import RegisteredUsers from "./RegistredUsers/RegisteredUsers";

function RegisteredUsersMainPage() {
  let { id } = useParams();

  return (
    <div>
      <Header />
      <div style={{ marginTop: "80px" }}></div>
      <RegisteredUsers eid={id} />
    </div>
  );
}

export default RegisteredUsersMainPage;
