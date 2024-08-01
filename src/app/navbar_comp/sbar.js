"use client"; 
import './nav.css'
import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Here" className="search-input" />
    </div>
  );
};

export default SearchBar;
