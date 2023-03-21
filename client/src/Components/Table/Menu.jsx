import { BsFillTrashFill } from "react-icons/bs";
import { ImBlocked } from "react-icons/im";
import { useEffect } from "react";

const Menu = ({ selectAll, blockUser, deleteUser, change, list }) => {
  return (
    <div className="flex mb-4 mt-2 ml-9 items-center">
      <span className="block mr-16">Name</span>
      <span className="block mr-36">Email</span>
      <span className="block mr-36">Login date</span>
      <span className="block mr-24">Reg date</span>
      <span className="block mr-16">Status</span>
      <span onClick={selectAll} className="block mr-8 cursor-pointer">
        Select all
      </span>
      <ImBlocked
        onClick={() => blockUser().then((data) => console.log(data))}
        className="mr-8 text-xl hover:text-rose-900 cursor-pointer"
      />
      <BsFillTrashFill
        onClick={() =>
          deleteUser().then((data) => {
            console.log(data);
          })
        }
        className="text-xl hover:text-rose-900 cursor-pointer"
      />
    </div>
  );
};

export default Menu;
