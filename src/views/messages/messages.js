import React, { useEffect } from 'react';
import './messages.sass';
import { useAuth } from 'hook/useAuth';

import { Outlet } from 'react-router-dom';
import ListChats from './listChats/listChats';
import ContentChat from './contentChat/contentChat';

function Messages() {
  const user = useAuth();

  return (
    <div className="messages_container">
      <div className="messages_listChat">
        <ListChats />
      </div>
      <div className="messages_content">
        <ContentChat />
      </div>
    </div>
  );
}

export default Messages;
