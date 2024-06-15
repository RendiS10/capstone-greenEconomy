import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faImage, faList } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <aside className="menu" style={{ backgroundColor: '#81A263' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
        <img src="favicon2.png" alt="Logo" style={{ height: '80px', dispaly : 'flex'}} />
      </div>
      <ul className="menu-list">
        <li className="menu-item" style={{ cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
          <Link to="/" style={{ display: 'block', padding: '10px', color: 'black' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#365E32'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} onMouseDown={(e) => e.currentTarget.style.border = '2px solid #4CAF50'} onMouseUp={(e) => e.currentTarget.style.border = 'none'}>
            <FontAwesomeIcon icon={faHome} /> Dashboard
          </Link>
        </li>
        <li className="menu-item" style={{ cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
          <Link to="/addgallery" style={{ display: 'block', padding: '10px', color: 'black' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#365E32'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} onMouseDown={(e) => e.currentTarget.style.border = '2px solid #4CAF50'} onMouseUp={(e) => e.currentTarget.style.border = 'none'}>
            <FontAwesomeIcon icon={faImage} /> Tambah Data Gallery
          </Link>
        </li>
        <li className="menu-item" style={{ cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
          <Link to="/addarticle" style={{ display: 'block', padding: '10px', color: 'black' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#365E32'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} onMouseDown={(e) => e.currentTarget.style.border = '2px solid #4CAF50'} onMouseUp={(e) => e.currentTarget.style.border = 'none'}>
            <FontAwesomeIcon icon={faPlus} /> Tambah Data Artikel
          </Link>
        </li>
       
        <li className="menu-item" style={{ cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
          <Link to="/gallerylist" style={{ display: 'block', padding: '10px', color: 'black' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#365E32'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} onMouseDown={(e) => e.currentTarget.style.border = '2px solid #4CAF50'} onMouseUp={(e) => e.currentTarget.style.border = 'none'}>
            <FontAwesomeIcon icon={faList} /> Gallery List
          </Link>
        </li>
        <li className="menu-item" style={{ cursor: 'pointer', transition: 'background-color 0.3s ease' }}>
          <Link to="/articlelist" style={{ display: 'block', padding: '10px', color: 'black' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#365E32'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'} onMouseDown={(e) => e.currentTarget.style.border = '2px solid #4CAF50'} onMouseUp={(e) => e.currentTarget.style.border = 'none'}>
            <FontAwesomeIcon icon={faList} /> Article List
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
