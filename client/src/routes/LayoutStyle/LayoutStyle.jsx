import React from 'react'
import './LayoutStyle.scss';
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'




function Layout() {
    return (
      <div className="Layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet/>
        </div>
      </div>
    );
  }
  
  export default Layout;