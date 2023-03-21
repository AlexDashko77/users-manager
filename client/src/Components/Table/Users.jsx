import { AiOutlineCheckCircle } from "react-icons/ai";
import { useEffect } from "react";

const Users = ({ list, add, added, change }) => {
  return (
    <>
      {list.map((el) => {
        return (
          <div key={el.id} className="flex">
            <button onClick={() => add(el.id)} className="pr-3 pb-0.5">
              <div className="text-2xl">
                <AiOutlineCheckCircle />
              </div>
            </button>
            <div
              className={
                added.includes(el.id)
                  ? `bg-gray-300 flex w-screen border-2 border-teal-700 mb-1 p-1`
                  : `flex w-screen border-2 border-teal-700 mb-1 p-1`
              }
            >
              <span className="block w-14 mr-4 pr-14">{el.firstname}</span>
              <span className="block w-40 mr-2 pr-4">{el.email}</span>
              <span className="mr-2 pr-4">{el.login_date}</span>
              <span className="mr-2 pr-6">{el.reg_date}</span>
              <span className="mr-2 pr-4">{el.user_status}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Users;
