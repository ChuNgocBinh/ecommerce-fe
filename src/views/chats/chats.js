import React, { useEffect } from 'react';
import './chats.sass';
import { useAuth } from 'hook/useAuth';

import { Outlet } from 'react-router-dom';

function Chats() {
  const user = useAuth();

  return (
    <div className="chat_container">
      <div className="chat_title">Chats</div>
      <div className="chat_box">
        <div className="chat_list">side bar</div>
        <div className="chat_content">content</div>
      </div>
    </div>
  );
}

export default Chats;
