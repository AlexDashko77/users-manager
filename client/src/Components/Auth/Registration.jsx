import { NavLink, useNavigate } from "react-router-dom";
import { useRegistration } from "./../../hooks/useRegistration";
import Field from "./Field";
import Button from "./Button";

const Registration = ({ status, changeStatus }) => {
  const { name, setName, email, setEmail, password, setPassword, addUser } =
    useRegistration();

  const navigate = useNavigate();

  setTimeout(() => {
    if (status == "true") {
      navigate("/login");
      changeStatus("");
    }
  }, 1000);
  return (
    <>
      <div className="mt-32 flex flex-col items-center ">
        <h1 className="text-5xl">Регистрация</h1>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6">
          <Field title={"Имя"} value={name} change={setName} type={"text"} />
          <Field
            title={"Почта"}
            value={email}
            change={setEmail}
            type={"text"}
          />
          {status == "false" ? (
            <p className="text-red-900 pt-0.5">Email занят</p>
          ) : (
            <></>
          )}
          <Field
            title={"Пароль"}
            value={password}
            change={setPassword}
            type={"password"}
          />

          <Button path={"/"} click={addUser} status={changeStatus}>
            Отправить
          </Button>
        </form>
        <p className="mr-24 mt-2">
          Есть аккаунт ?
          <NavLink to="/login" className="text-teal-700 cursor-pointer pl-1">
            Click
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default Registration;
