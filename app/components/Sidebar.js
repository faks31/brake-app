"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const currentRoute = usePathname();

  const menuItems = [
    {
      title: "Home",
      icon: "/home-icon.png",
      link: "/dashboard",
    },
    {
      title: "Activities",
      icon: "/activities.png",
      link: "/dashboard/activities",
    },
    {
      title: "Settings",
      icon: "/settings.png",
      submenuItems: [
        {
          title: "Delete Account",
          link: "/dashboard/settings/account",
        },
        {
          title: "Privacy & Policy",
          link: "/dashboard/settings/privacy-policy",
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={`bg-white border-r-2 border-solid border-r-[#e04b5f] w-96 h-screen shadow-2xl p-5 overflow-y-hidden ${
          isSidebarOpen ? "" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center mb-10">
          <Link href={"/dashboard"}>
            <Image src="/logo.png" width={200} height={200} alt="logo" />
          </Link>
        </div>
        <ul className="flex flex-col justify-between h-full py-4">
          <div>
            {menuItems.map((menuItem) => (
              <div key={menuItem.title}>
                {menuItem.submenuItems ? (
                  <div
                    className="flex items-center gap-4 px-6 py-3 my-2 rounded-[12px] cursor-pointer hover:bg-gradient-to-r hover:from-[#6c4c98] hover:via-[#b14c78] hover:to-[#e04b5f] text-gray hover:text-white font-semibold text-md"
                    onClick={() => toggleSubmenu()}
                  >
                    <Image
                      src={menuItem.icon}
                      width={20}
                      height={20}
                      alt={menuItem.title}
                    />
                    {menuItem.title}
                  </div>
                ) : (
                  <Link href={menuItem.link} key={menuItem.title}>
                    <li
                      className={
                        currentRoute === menuItem.link
                          ? "flex items-center gap-4 px-6 py-3 my-2 rounded-[12px] bg-gradient-to-r from-[#6c4c98] via-[#b14c78] to-[#e04b5f] text-white font-semibold text-md"
                          : "flex items-center gap-4 px-6 py-3 my-2 rounded-[12px] hover:bg-gradient-to-r hover:from-[#6c4c98] hover:via-[#b14c78] hover:to-[#e04b5f] text-gray hover:text-white font-semibold text-md"
                      }
                    >
                      <Image
                        src={menuItem.icon}
                        width={20}
                        height={20}
                        alt={menuItem.title}
                      />
                      {menuItem.title}
                    </li>
                  </Link>
                )}
                {menuItem.submenuItems && isSubmenuOpen && (
                  <ul className="pl-8">
                    {menuItem.submenuItems.map((submenuItem) => (
                      <Link href={submenuItem.link} key={submenuItem.title}>
                        <li
                          className={`flex items-center gap-4 px-6 py-3 my-2 rounded-[12px] hover:bg-gradient-to-r hover:from-[#6c4c98] hover:via-[#b14c78] hover:to-[#e04b5f] text-gray hover:text-white font-semibold text-md`}
                        >
                          {submenuItem.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <Link className="mb-20" href="/">
            <li className="flex items-center gap-4 px-6 py-3 my-2 rounded-[12px] hover:bg-opacity-75  hover:bg-gradient-to-r hover:from-[#6c4c98] hover:via-[#b14c78] hover:to-[#e04b5f] text-gray hover:text-white font-semibold text-md">
              <Image src="/logout.png" width={20} height={20} alt="" />
              Logout
            </li>
          </Link>
        </ul>
      </div>
      <button
        className="fixed top-0 left-0 p-4 bg-gray-800 text-white sm:hidden"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          ></path>
        </svg>
      </button>
    </>
  );
};

export default Sidebar;
