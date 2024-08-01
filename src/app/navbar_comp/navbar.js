"use client"; 
import './nav.css'
import React from 'react';
import Logo from './logo';
import NavItems from './navItems';
import SearchBar from './sbar';
import Profile from './profile';

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <NavItems />
      <SearchBar />
      <Profile />
    </div>
  );
};

export default Navbar;
