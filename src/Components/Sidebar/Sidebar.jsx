import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink, Outlet} from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '90vh', overflow: 'scroll initial', zIndex:"1", position:"sticky" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Courses
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="Cse" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">CSE Courses</CDBSidebarMenuItem>

            </NavLink>
            <NavLink to="Ece" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">ECE Courses</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="Management" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">Management Courses</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center', margin: '10px' }}>
            Happy Learning
        </CDBSidebarFooter>
      </CDBSidebar>
        <Outlet/>
    </div>
  );
};

export default Sidebar;
