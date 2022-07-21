import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
import { FormattedMessage } from 'react-intl';

function SideBarMyShop() {
  return (
    <div>
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage id="myshop.sidebar.create" />} />
      </ListItemButton>
    </div>
  );
}

export default SideBarMyShop;
