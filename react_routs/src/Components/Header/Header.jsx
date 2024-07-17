import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex flex-wrap justify-center g-2">
        <div className="flex">
          <NavLink
            to={""}
            className={({ isActive }) => `
                        ${isActive ? "bg-black" : "bg-white"}
                        `}
          >
            Home
          </NavLink>
        </div>
        <div className="flex">
          <NavLink
            to={"/about"}
            className={({ isActive }) => `
                        ${isActive ? "bg-black" : "bg-white"}
                        `}
          >
            About
          </NavLink>
        </div>
        <div className="flex">
          <NavLink
            to={"/contact"}
            className={({ isActive }) => `
                        ${isActive ? "bg-black" : "bg-white"}
                        `}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}
