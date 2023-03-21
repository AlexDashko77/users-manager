import { useState } from "react";

export const useAuthenfication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (
    url = "http://localhost:5000/auth/login",
    data = { email, password }
  ) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setEmail("");
    setPassword("");
    return response.json();
  };

  return { email, setEmail, password, setPassword, login };
};
