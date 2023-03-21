import { useState } from "react";

export const useUsers = (status, list, change) => {
  const [auth, setAuth] = useState(true);
  const [added, setAdded] = useState([]);
  const [select, setSelect] = useState(true);

  const deleteUser = async (
    url = "http://localhost:5000/auth/delete",
    data = { added }
  ) => {
    change((e) => !e);
    if (added.includes(status[0].id)) {
      setAuth(false);
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setAdded([]);
  };

  const blockUser = async (
    url = "http://localhost:5000/auth/block",
    data = { added }
  ) => {
    change((e) => !e);
    if (added.includes(status[0].id)) {
      setAuth(false);
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setAdded([]);
  };

  const selectAll = () => {
    if (select) {
      list.map((el) => {
        return setAdded((prev) => [...prev, el.id]);
      });
      setSelect((prev) => !prev);
    } else {
      setAdded([]);
      setSelect((prev) => !prev);
    }
  };

  const add = (e) => {
    if (added.includes(e)) {
      setAdded(added.filter((el) => el != e));
    } else {
      setAdded((prev) => [...prev, e]);
    }
  };

  return {
    auth,
    setAuth,
    added,
    setAdded,
    select,
    setSelect,
    deleteUser,
    blockUser,
    selectAll,
    add,
  };
};
