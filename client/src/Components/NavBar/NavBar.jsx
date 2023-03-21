import { NavLink } from "react-router-dom";

const NavBar = ({ change }) => {
  return (
    <div className="mt-4 flex justify-between">
      <div className="flex gap-2">
        <NavLink
          className="block text-center w-36 h-7 border-2 border-teal-700 text-teal-700"
          to={"/"}
          onClick={change}
        >
          Регистрация
        </NavLink>
        <NavLink
          className="block text-center w-36 h-7 border-2 border-teal-700 text-teal-700"
          to={"/login"}
          onClick={change}
        >
          Авторизация
        </NavLink>
      </div>
      <div>
        <NavLink
          className="block text-center w-36 h-7 border-2 border-teal-700 text-teal-700"
          to={"/login"}
          onClick={change}
        >
          Выйти
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
