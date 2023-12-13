import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBContainer} from 'cdbreact';
import { NavLink, Routes, Route} from 'react-router-dom';
import Cse from './Cse'
import Ece from './Ece'
import Management from './Management'

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Skillvert
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/Cse" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">CSE Courses</CDBSidebarMenuItem>
        
            </NavLink>
            <NavLink to="/Ece" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">ECE Courses</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/Management" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">Management Courses</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center', margin: '10px' }}>
            Happy Learning
        </CDBSidebarFooter>
      </CDBSidebar>
      <CDBContainer>
        <Content/>
      </CDBContainer>
    </div>
  );
};

export default Sidebar;


export function Content() {
  return (
    <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Cse" element={<Cse />}/>
        <Route path="Ece" element={<Ece />}/>
        <Route path="Management" element={<Management />}/>
      </Routes>
  )
}
