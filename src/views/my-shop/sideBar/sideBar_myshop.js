import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DnsIcon from '@mui/icons-material/Dns';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

function SideBarMyShop() {
  return (
    <div>
      <Link to="/my-shop/create-product">
        <ListItemButton>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText
            primary={<FormattedMessage id="myshop.sidebar.create" />}
          />
        </ListItemButton>
      </Link>
      <Link to="/my-shop/list-products">
        <ListItemButton>
          <ListItemIcon>
            <DnsIcon />
          </ListItemIcon>
          <ListItemText
            primary={<FormattedMessage id="myshop.sidebar.list" />}
          />
        </ListItemButton>
      </Link>
      <Link to="/my-shop/list-products-accept">
        <ListItemButton>
          <ListItemIcon>
            <DnsIcon />
          </ListItemIcon>
          <ListItemText
            primary={<FormattedMessage id="myshop.sidebar.list.accept" />}
          />
        </ListItemButton>
      </Link>
    </div>
  );
}

export default SideBarMyShop;
