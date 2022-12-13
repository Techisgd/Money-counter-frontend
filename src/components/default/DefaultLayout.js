import React from "react";
import { Slot } from "react-page-layout";
import { useHistory } from "react-router";
import dashboard from "../../assets/images/dashboard1.png";
import list from "../../assets/images/transaction.png";
import profile from "../../assets/images/account.png";
import dashboardActive from "../../assets/images/dashboard.png";
import listActive from "../../assets/images/active-list.png";
import profileActive from "../../assets/images/active-account.png";
import Logo from "../../assets/images/Money-Count-Logo.png";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function DefaultLayout() {
  const history = useHistory();
  const { pathname } = history.location;
  return (
    <div className="main-wrapper">
      <div className="content-wrapper">
        <aside className="sidebar">
          <ul>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
            <Link to="/">
              <li className={pathname === "/" ? "active-sidebar" : ""}>
                <img
                  src={pathname === "/" ? dashboardActive : dashboard}
                  alt="dashboard-icon"
                />
              </li>
            </Link>
            <Link to="/transaction">
              <li
                className={pathname === "/transaction" ? "active-sidebar" : ""}
              >
                <img
                  src={pathname === "/transaction" ? listActive : list}
                  alt="list-icon"
                />
              </li>
            </Link>
            <Link to="/profile">
              <li className={pathname === "/profile" ? "active-sidebar" : ""}>
                <img
                  src={pathname === "/profile" ? profileActive : profile}
                  alt="profile-icon"
                />
              </li>
            </Link>
          </ul>
        </aside>
        <div className="content">
          <Header/>
          <Slot name="breadcrumbs" className="second-nav-bar" />
          <Slot name="main" component="section" />
        </div>
      </div>
    </div>
  );
}
