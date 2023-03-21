import Registration from "./Components/Auth/Registration";
import Authenfication from "./Components/Auth/Authenfication";
import Table from "./Components/Table/Table";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState(false);
  const [regStatus, setRegStatus] = useState(" ");

  const getUsers = async (url = "http://localhost:5000/auth/users") => {
    const response = await fetch(url, { method: "GET" });
    setList(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, [users]);
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <NavBar change={setUser} />
        <Routes>
          <Route
            path="/"
            element={
              <Registration status={regStatus} changeStatus={setRegStatus} />
            }
          />
          <Route
            path="/login"
            element={
              <Authenfication
                status={user}
                changeStatus={setUser}
                change={setUsers}
              />
            }
          />
          <Route
            path="/users"
            element={<Table list={list} status={user} change={setUsers} />}
          />
        </Routes>
      </div>
    </>
  );
};
export default App;
