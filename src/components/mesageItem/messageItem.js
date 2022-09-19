import React from 'react';
// import 'messageItem.sass';

function MessageItem({ data }) {
  return (
    <div>
      <img src={data.profile_picture} alt="avatar" />
      <div>
        {data.content}
      </div>
    </div>
  );
}

export default MessageItem;
