import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillTagsFill, BsRobot } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import { MdSpaceDashboard, MdStyle, MdWebStories } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { TiPointOfInterestOutline } from "react-icons/ti";
import { IoVideocam } from "react-icons/io5";

interface SidebarProps {
  active?: string;
  isNew?: boolean;
}

const returnActiveStyle = (active: string, name: string) => {
  let style = "";
  const combo = `${active}-${name}`;
  switch (combo) {
    case "dashboard-dashboard":
      style = `text-white-100 bg-white-600 pp-EB`;
      break;
    case "commands-commands":
      style = `text-white-100 bg-white-600 pp-EB`;
      break;
    case "settings-settings":
      style = `text-white-100 bg-white-600 pp-EB`;
      break;
    default:
      style = "text-white-300 pp-SB";
      break;
  }
  return style;
};

function SideBar({ active }: SidebarProps) {
  const renderNewBadge = () => {
    return (
      <span className="absolute top-[-6px] right-[0px] px-2 py-[.9px] rounded-md text-white-100 text-[9px] bg-red-305 ">
        New
      </span>
    );
  };

  return (
    <div className="w-[18%] h-[100vh] py-[2em] border-r-[1px] border-r-solid border-r-white-600  overflow-y-scroll hideScrollBar">
      <ul className="w-full flex flex-col items-start justify-start px-2 gap-6 mt-7">
        <Link href="/dashboard" className="w-full">
          <li
            className={`${returnActiveStyle(
              active,
              "dashboard"
            )} relative border-solid border-[.1px] border-white-600 hover:bg-white-600 py-2 rounded-[10px] cursor-pointer hover:text-white-100 hover:pp-SB text-[14px] transition-all gap-3 flex items-start justify-start`}
          >
            <MdSpaceDashboard className="ml-2 text-2xl " /> Dashboard
          </li>
        </Link>
        <Link href="/commands" className="w-full">
          <li
            className={`${returnActiveStyle(
              active,
              "commands"
            )} relative border-solid border-[.1px] border-white-600 hover:bg-white-600 py-2 rounded-[10px] cursor-pointer hover:text-white-100 hover:pp-SB text-[14px] transition-all gap-3 flex items-center justify-start`}
          >
            <BsRobot className="ml-2 text-2xl " /> Commands
          </li>
        </Link>

        <li className="w-full text-white-400 text-[14px] pp-SB ">ADVANCED</li>
        <Link href="/settings" className="w-full">
          <li
            className={`${returnActiveStyle(
              active,
              "settings"
            )} hover:bg-white-600 py-2 rounded-[10px] cursor-pointer hover:text-white-100 hover:pp-SB text-[14px] transition-all gap-3 flex items-center justify-start`}
          >
            <FaCog className="ml-2 text-2xl " /> Settings
          </li>
        </Link>
      </ul>

      {/* content */}
    </div>
  );
}

export default SideBar;
