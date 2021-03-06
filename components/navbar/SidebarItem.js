import React from "react";
import { useSidebarToggleContext } from "../../context/SidebarState";
import { useRouter } from "next/router";

const NavItem = ({ Icon, title, href }) => {
  const router = useRouter();
  const toggleSidebar = useSidebarToggleContext();

  const handleClick = (e) => {
    e.preventDefault();
    toggleSidebar;
    router.push(href);
  };
  return (
    <a
      href={href}
      className="mt-1 my-2 group flex items-center px-2 py-3 pl-8 text-sm leading-5 font-medium text-gray-700 rounded-lg hover:text-white hover:bg-green-500 focus:outline-none focus:text-white focus:bg-green-600 transition ease-in-out duration-150"
      onClick={handleClick}
    >
      <i className="h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150" />
      <Icon className="mr-4 h-4 w-auto" />
      {title}
    </a>
  );
};

export default NavItem;
