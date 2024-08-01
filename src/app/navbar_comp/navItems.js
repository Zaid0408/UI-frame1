"use client"; 
import './nav.css'
import React from 'react';

const NavItems = () => {
  return (
    <div className="nav-items">
      <a href="#" className="nav-link">Home</a>
      <a href="#" className="nav-link">Dashboard</a>
      <a href="#" className="nav-link">Projects</a>
      <a href="#" className="nav-link">Tasks</a>
      <a href="#" className="nav-link">Reporting</a>
      <a href="#" className="nav-link">Users</a>
    </div>
  );
};

export default NavItems;
