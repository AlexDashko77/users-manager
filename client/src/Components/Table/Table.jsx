import { useEffect } from "react";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import { useUsers } from "./../../hooks/useUsers";
import Users from "./Users";
const Table = ({ list, status, change }) => {
  const navigate = useNavigate();
  const { auth, setAuth, added, deleteUser, blockUser, selectAll, add } =
    useUsers(status, list, change);

  useEffect(() => {
    change((e) => !e);
  }, []);
  setTimeout(() => {
    if (status[0] === "false" || auth == false) {
      status[0] = false;
      setAuth(true);
      navigate("/login");
    } else {
      setAuth(true);
    }
  }, 1000);

  return (
    <>
      <div className="mt-9">
        <Menu
          selectAll={selectAll}
          blockUser={blockUser}
          deleteUser={deleteUser}
          change={change}
          list={list}
        />
        <Users list={list} add={add} added={added} change={change} />
      </div>
    </>
  );
};

export default Table;
