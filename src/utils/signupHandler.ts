import React, { useState } from "react";

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
async function signupHandler(e: any) {
  e.preventDefault();
  const userName = email.split("@")[0];
  await fetch("http://localhost:3001/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, firstName, lastName, email, password }),
  });
}
