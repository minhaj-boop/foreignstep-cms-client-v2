import React, { useState } from "react";
import "./sidebar.css";
import logo from "../images/logo.svg";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiLogIn, FiMail } from "react-icons/fi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: BsPeople,
  },
  {
    name: "Mails",
    href: "/mails",
    icon: FiMail,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: TiContacts,
  },
];

const Sidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar((prev) => !prev);
  };

  const user = true;

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={handleToggleSidebar}>
        {toggleSidebar ? (
          <MdOutlineKeyboardArrowRight />
        ) : (
          <MdOutlineKeyboardArrowLeft />
        )}
      </button>
      <aside className="sidebar" data-collapse={toggleSidebar}>
        <div className="sidebar__top">
          <img
            src={logo}
            alt=""
            width={80}
            height={80}
            className="sidebar__logo"
          />
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li className="sidebar__item" key={name}>
              <NavLink to={href} className="sidebar__link">
                <span className="sidebar__icon">
                  <Icon />
                </span>
                <span className="sidebar__name">{name}</span>
              </NavLink>
            </li>
          ))}
          {!user && (
            <li>
              <NavLink to="/login" className="sidebar__link">
                <span className="sidebar__icon">
                  <FiLogIn />
                </span>
                <span className="sidebar__name">Login</span>
              </NavLink>
            </li>
          )}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
