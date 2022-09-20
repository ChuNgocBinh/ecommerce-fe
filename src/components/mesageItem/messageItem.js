import { useAuth } from 'hook/useAuth';
import React from 'react';
import './messageItem.sass';

function MessageItem({ data }) {
  const user = useAuth();
  return (
    <div className={data.sender_id === user.id ? 'messageItem_container--me' : 'messageItem_container--other'}>
      <img src={data.profile_picture} alt="avatar" className="messageItem_avatar" />
      <div className={data.sender_id === user.id ? 'messageItem_content--me' : 'messageItem_content--other'}>
        {data.content}
      </div>
    </div>
  );
}

export default MessageItem;
