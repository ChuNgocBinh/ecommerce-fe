import React, { useEffect, useRef, useState } from 'react';
import './contentChat.sass';
import { useAuth } from 'hook/useAuth';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createMessage, getMessages } from 'services/conversation';
import MessageItem from 'components/mesageItem/messageItem';
import { Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function ContentChat() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(100);
  const [messages, setMessages] = useState([]);
  const [valueMessage, setValueMessage] = useState('');
  const user = useAuth();
  const { message_id } = useParams();
  const refScroll = useRef();

  const fetchMessages = async () => {
    const list_messages = await getMessages(message_id, page, pageSize);
    setMessages(list_messages?.data?.data);
  };

  useEffect(() => {
    fetchMessages();
  }, [message_id]);

  const handleSendMessage = async (event) => {
    event.preventDefault();
    setValueMessage('');
    const res = await createMessage(message_id, { content: valueMessage });
    if (res.status === 200) {
      const data = {
        content: valueMessage,
        conversation_id: 1,
        createdAt: new Date().toISOString,
        id: messages.length + 1,
        profile_picture: user.profile_picture,
        sender_id: user.id,
        user_name: user.user_name,
      };
      setMessages((message) => [...messages, data]);
      refScroll.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  };

  return (
    <div className="listChat_container">
      <div className="listChat_content">
        {
          messages.map((item) => (
            <div key={item.id}>
              <MessageItem data={item} />
            </div>
          ))
        }
        <div ref={refScroll}>hien hang nayf</div>
      </div>
      <div>
        <form className="listChat_form">
          <input className="input" onChange={(e) => setValueMessage(e.target.value)} value={valueMessage} />
          <button onClick={handleSendMessage}><SendIcon /></button>
        </form>
      </div>
    </div>
  );
}

export default ContentChat;
