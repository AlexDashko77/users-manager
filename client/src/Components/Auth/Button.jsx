import { NavLink } from "react-router-dom";
const Button = ({ children, path, click, status }) => {
  return (
    <NavLink
      to={path}
      onClick={() =>
        click().then((data) => {
          setTimeout(() => {
            status([data]);
          }, 1000);
        })
      }
      className="block text-center pt-1.5 w-60 h-9 bg-teal-700 text-white mt-3 cursor-pointer"
    >
      {children}
    </NavLink>
  );
};

export default Button;
