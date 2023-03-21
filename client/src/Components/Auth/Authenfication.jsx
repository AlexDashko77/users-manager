import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuthenfication } from "./../../hooks/useAuthenfication";
import Field from "./Field";
import Button from "./Button";

const Authenfication = ({ status, changeStatus, change }) => {
  const { email, setEmail, password, setPassword, login } = useAuthenfication();
  useEffect(() => {
    change(false);
  }, []);
  return (
    <>
      <div className="mt-32 flex flex-col items-center ">
        <h1 className="text-5xl">Авторизация</h1>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6">
          <Field
            title={"Почта"}
            value={email}
            change={setEmail}
            type={"text"}
          />
          <Field
            title={"Пароль"}
            value={password}
            change={setPassword}
            type={"password"}
          />
          {status[0] == false ? (
            <p className="text-red-900 ">Нет такого пользователя</p>
          ) : (
            <></>
          )}
          <Button path={"/users"} click={login} status={changeStatus}>
            Отправить
          </Button>
        </form>
        <p className="mr-24 mt-2">
          Нет аккаунта ?
          <NavLink to="/" className="text-teal-700 cursor-pointer pl-1">
            Click
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default Authenfication;
