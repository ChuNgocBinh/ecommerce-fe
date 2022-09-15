import React, { useEffect } from 'react';
import './contentChat.sass';
import { useAuth } from 'hook/useAuth';

import { useDispatch } from 'react-redux';

function ContentChat() {
  const user = useAuth();
  const dispatch = useDispatch();

  return (
    <div className="listChat_container">
      đây là content chat
    </div>
  );
}

export default ContentChat;
