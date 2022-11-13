/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import './chats.sass';
import { useAuth } from 'hook/useAuth';
import { createMessage, getConversations, getMessages } from 'services/conversation';
import { useNavigate, Outlet } from 'react-router-dom';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';

function Chats() {
  const user = useAuth();
  const navigate = useNavigate();
  const sendRef = useRef();
  const [conversations, setConversation] = useState([]);
  const [messageGroup, setMessageGroup] = useState([]);
  const [textMessage, setTextMessage] = useState('');
  const [currentCvs, setCurrentCvs] = useState();
  const [pageCvs, setPageCvs] = useState(1);
  const pageSize = 10;
  const [pageMess, setPageMess] = useState(1);

  const fetchListConversation = async () => {
    try {
      const res = await getConversations(pageCvs, pageSize);
      if (res.status === 200) {
        setConversation(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
      navigate('/error');
    }
  };

  const renderName = (title) => {
    const name = title.split(',').find((el) => el !== user.user_name);
    return name;
  };

  const handeSelectMessage = async (id) => {
    try {
      const messages = await getMessages(id, pageMess, pageSize);
      console.log(messages);
      setCurrentCvs(id);
      setMessageGroup(messages?.data?.data);
    } catch (error) {
      console.log(error);
      navigate('/error');
    }
  };

  const scrollIntoView = () => {
    sendRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  const handleSendMessage = async (e) => {
    try {
      e.preventDefault();
      if (textMessage.trim()) {
        const res = await createMessage(currentCvs, {
          content: textMessage,
        });
        if (res.status === 200) {
          const data = {
            content: textMessage,
            conversation_id: currentCvs,
            createdAt: new Date().toISOString,
            id: uuidv4(),
            profile_picture: user.profile_picture,
            replay: null,
            sender_id: user.id,
            user_name: user.user_name,
          };
          setMessageGroup((pre) => [data, ...pre]);
          setTextMessage('');
          scrollIntoView();
        }
      }
    } catch (error) {
      console.log(error);
      navigate('/error');
    }
  };

  useEffect(() => {
    fetchListConversation();
  }, []);

  useEffect(() => {
    scrollIntoView();
  }, [currentCvs]);

  return (
    <div className="chat_container">
      <div className="chat_title">
        <div className="chat_title--lable">Chats</div>
        <div className="chat_title--cancel">X</div>
      </div>
      <div className="chat_box">
        <div className="chat_list">
          <div className="chat_list--group">
            {
              conversations.map((el) => (
                <div
                  className="chat_list--item"
                  onClick={() => handeSelectMessage(el.conversation_id)}
                  key={el.conversation_id}
                >
                  {renderName(el.title)}
                </div>
              ))
            }
          </div>
        </div>
        <div className="chat_content">
          <div className="chat_content--group">
            <div style={{ height: '38px' }} ref={sendRef} />
            {
              messageGroup.map((el) => (
                <div key={el.id} className={cn({ 'chat_content--box': true, 'chat_content--me': user.id === el.sender_id })}>
                  <div className="chat_content--avatar">
                    <img alt="avatar message" src={el.profile_picture} />
                  </div>
                  <div className={cn({ 'chat_content--text': true, 'chat_content--text--me': user.id === el.sender_id })}>
                    {el.content}
                  </div>
                </div>
              ))
            }
          </div>
          <div>
            <form className="chat_content--form" onClick={handleSendMessage}>
              <input className="input" onChange={(e) => setTextMessage(e.target.value)} value={textMessage} />
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
