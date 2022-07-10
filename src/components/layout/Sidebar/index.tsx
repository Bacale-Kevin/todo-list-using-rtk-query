import React, { useState, useEffect, useCallback } from "react";
import {
  ClipboardListIcon,
  StarIcon,
  CheckCircleIcon,
  TemplateIcon,
  CogIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  UsersIcon
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  const handleToggleOpen = () => {
    setToggle(true);
  };

  const handleToggleClose = () => {
    setToggle(false);
  };


  return (
    <>
      <aside
        className={`h-screen shadow-sm  
      ${
        toggle
          ? "col-span-1 w-20 transition-all ease-in-out duration-300"
          : "col-span-2 transition-all ease-in-out duration-1000"
      }
      `}
      >
        <div className="mt-4 flex justify-end px-4 items-center cursor-pointer">
          {toggle ? (
            <ChevronDoubleRightIcon className="w-6" onClick={handleToggleClose} />
          ) : (
            <ChevronDoubleLeftIcon className="w-6 ml-28  " onClick={handleToggleOpen} />
          )}
        </div>

        <Link href="/">
          <div
            className={`flex items-center gap-4 mt-16 py-2 cursor-pointer hover:opacity-60 transition-all duration-200 ease-in-out ${
              router.pathname === "/" ? "bg-gray-100  " : ""
            }
            ${toggle ? "pl-7" : "pl-8"}
            `}
          >
            <ClipboardListIcon className="w-6" />
            <div className={`${toggle ? "hidden" : "block"}`}>Todo List</div>
          </div>
        </Link>

        <Link href="/important">
          <div
            className={` flex items-center gap-4 pl-8 py-2 cursor-pointer mt-8 hover:opacity-60 transition-all duration-200 ease-in-out ${
              router.pathname === "/important" ? "bg-gray-100  " : ""
            } 
             ${toggle ? "pl-7" : "pl-8"}
             `}
          >
            <StarIcon className="w-6" />
            <div className={`${toggle ? "hidden" : "block"}`}>Important</div>
          </div>
        </Link>

        <Link href="/completed">
          <div
            className={`flex items-center gap-4 pl-8 py-2 cursor-pointer mt-8 hover:opacity-60 transition-all duration-200 ease-in-out ${
              router.pathname === "/completed" ? "bg-gray-100  " : ""
            }
             ${toggle ? "pl-7" : "pl-8"}
            `}
          >
            <CheckCircleIcon className="w-6" />
            <div className={`${toggle ? "hidden" : "block"}`}>Completed</div>
          </div>
        </Link>

        <Link href="/categories">
          <div
            className={`flex items-center gap-4 pl-8 py-2 cursor-pointer mt-8 hover:opacity-60 transition-all duration-200 ease-in-out ${
              router.pathname === "/categories" ? "bg-gray-100  " : ""
            }
             ${toggle ? "pl-7" : "pl-8"}
            `}
          >
            <TemplateIcon className="w-6" />
            <div className={`${toggle ? "hidden" : "block"}`}>Categories</div>
          </div>
        </Link>

        <Link href="/categories">
          <div
            className={`flex items-center gap-4 pl-8 py-2 cursor-pointer mt-8 hover:opacity-60 transition-all duration-200 ease-in-out ${
              router.pathname === "/users" ? "bg-gray-100  " : ""
            }
             ${toggle ? "pl-7" : "pl-8"}
            `}
          >
            <UsersIcon className="w-6" />
            <div className={`${toggle ? "hidden" : "block"}`}>Users</div>
          </div>
        </Link>

        <Link href="/settings">
          <div
            className={`flex items-center gap-4 pl-8 py-2 cursor-pointer mt-8 hover:opacity-60 transition-all duration-200 ease-in-out ${
              router.pathname === "/settings" ? "bg-gray-100  " : ""
            }
             ${toggle ? "pl-7" : "pl-8"}
            `}
          >
            <CogIcon className="w-6" />
            <div className={`${toggle ? "hidden" : "block"}`}>Settings</div>
          </div>
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
