import React, { memo, useState } from 'react';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './header.sass';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { changeLocale } from 'redux/appSLice';
import { Link } from 'react-router-dom';

export const langs = [
  {
    id: 1,
    value: 'en',
    icon: '/image/flag-en.png',
    title: 'English',
  },
  {
    id: 2,
    value: 'vi',
    icon: '/image/flag-vi.jpg',
    title: 'Việt Nam',
  },
];

function Header() {
  const [langCurrent, setlangCurrent] = useState(1);
  const dispatch = useDispatch();
  const handleClickLang = (id) => {
    setlangCurrent(id);
    const curLang = langs.find((item) => item.id === id).value;
    dispatch(changeLocale(curLang));
  };

  return (
    <div className="header_container">
      <div className="header_box">
        <Link to="/">
          <img src="/image/logo.png" alt="logo" className="header_brand" />
        </Link>
        <div className="header_search">
          <input />
          <button>
            <FormattedMessage id="header.search" />
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
          <div>Shop By Department</div>
        </div>
        <div className="header_nav-right">
          <div className="header_nav">Seller Center</div>
          <div className="header_i18n header_nav">
            <div className="header_lang">
              <img
                src={langs[langCurrent - 1].icon}
                alt="flag"
                className="header_flag"
              />
              <div className="header_lang-name">
                {langs[langCurrent - 1].title}
              </div>
              <KeyboardArrowDownIcon />
            </div>
            <ul className="header_list-lang">
              {langs.map((x) => (
                <li
                  key={x.id}
                  className="header_lang-item"
                  onClick={() => handleClickLang(x.id)}
                  aria-hidden="true"
                >
                  <img src={x.icon} alt="flag" className="header_flag" />
                  <div className="header_lang-name">{x.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
