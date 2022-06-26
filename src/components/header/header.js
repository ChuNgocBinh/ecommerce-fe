import React, { useState } from 'react';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './header.sass';

export const langs = [
  { id: 1, icon: '/image/flag-en.png', title: 'English' },
  { id: 2, icon: '/image/flag-vi.jpg', title: 'Việt Nam' },
];

function Header() {
  const [langCurrent, setlangCurrent] = useState(1);

  const handleClickLang = (id) => {
    setlangCurrent(id);
  };

  return (
    <div className="header_container">
      <div className="header_box">
        <img src="/image/logo.png" alt="logo" className="header_brand" />
        <div className="header_search">
          <input />
          <button>
            search
          </button>
        </div>
        <div className="header_action">
          <div className="header_icon">
            <ForumOutlinedIcon fontSize="large" />
            <div className="header_count">1</div>
          </div>
          <div className="header_icon">
            <NotificationsActiveOutlinedIcon fontSize="large" />
            <div className="header_count">1</div>
          </div>
          <div className="header_icon">
            <AddShoppingCartIcon fontSize="large" />
            <div className="header_count">1</div>
          </div>
          <div>
            <AccountCircleOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div className="header_options">
        <div className="header_nav header_nav-left">
          <MenuOutlinedIcon />
          <div>
            Shop By Department
          </div>
        </div>
        <div className="header_nav-right">
          <div className="header_nav">
            Seller Center
          </div>
          <div className="header_i18n header_nav">
            <div className="header_lang">
              <img src={langs[langCurrent - 1].icon} alt="flag" className="header_flag" />
              <div className="header_lang-name">
                {langs[langCurrent - 1].title}
              </div>
              <KeyboardArrowDownIcon />
            </div>
            <ul className="header_list-lang">
              {
                langs.map((x) => (
                  <li key={x.id} className="header_lang-item" onClick={() => handleClickLang(x.id)} aria-hidden="true">
                    <img src={x.icon} alt="flag" className="header_flag" />
                    <div className="header_lang-name">
                      {x.title}
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;