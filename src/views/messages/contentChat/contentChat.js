import React, { useEffect, useState } from 'react';
import './contentChat.sass';
import { useAuth } from 'hook/useAuth';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMessages } from 'services/conversation';
import MessageItem from 'components/mesageItem/messageItem';

function ContentChat() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [messages, setMessages] = useState([]);
  const user = useAuth();
  const { message_id } = useParams();
  console.log(message_id);
  const fetchMessages = async () => {
    const list_messages = await getMessages(message_id, page, pageSize);
    setMessages(list_messages?.data?.data);
  };
  useEffect(() => {
    fetchMessages();
  }, [message_id]);

  return (
    <div className="listChat_container">
      {
        messages.map((item) => (
          <div key={item.id}>
            <MessageItem data={item} />
          </div>
        ))
      }
    </div>
  );
}

export default ContentChat;
