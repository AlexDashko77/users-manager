import { useState } from "react";

export const useRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async (
    url = "http://localhost:5000/auth/registration",
    data = { name, email, password }
  ) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setName("");
    setEmail("");
    setPassword("");
    return response.json();
  };

  return { name, setName, email, setEmail, password, setPassword, addUser };
};
