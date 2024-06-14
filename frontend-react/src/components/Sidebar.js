import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="menu">
      <p className="menu-label">The Green Economy</p>
      <ul className="menu-list">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/addarticle">Tambah Data Artikel</Link>
        </li>
        <li>
          <Link to="/addgallery">Tambah Data Gallery</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
