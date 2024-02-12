import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import logo from "../admin/image/logoAd.png";

const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        overflow: "scroll initial",
        position: "fixed",
      }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#0f3460">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <img src={logo} alt="logo admin" style={{ width: "100px" }} />
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/products" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="shopping-bag">
                Products
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/orders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="clipboard-list">
                Orders
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/categories" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="th-list">
                Categories
              </CDBSidebarMenuItem>
              </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
