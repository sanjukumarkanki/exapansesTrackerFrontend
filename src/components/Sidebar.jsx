import SidebarTabs from "./SidebarTabs";
import Cookies from "js-cookie";
import { LuLogOut } from "react-icons/lu";

const Sidebar = () => {
  const onLogout = () => {
    const token = Cookies.remove("token");
    const userId = localStorage.removeItem("userId");
    if (token === undefined) {
      window.location.href = "/login";
    }
  };

  return (
    <div className="sidebar">
      <div className="flex  flex-col h-full justify-between items-center">
        <div>
          <SidebarTabs />
        </div>
        <button
          className="btn mb-4  btn-danger flex justify-start items-center w-full border-none outline-none text-white cursor-pointer bg-[#FC1503]"
          onClick={onLogout}
        >
          <span
            style={{
              color: "white",
              marginRight: "15px",
              height: "1rem",
            }}
          >
            <LuLogOut />
          </span>
          <span
            style={{
              opacity: "0.8",
              height: "1rem",
            }}
          >
            LOGOUT
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
