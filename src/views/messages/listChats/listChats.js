import React, { useEffect, useState } from 'react';
import './listChats.sass';
import { useAuth } from 'hook/useAuth';

import { useDispatch } from 'react-redux';
import { getConversations } from 'services/conversation';
import { Link } from 'react-router-dom';

function ListChats() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [conversation, setConversation] = useState([]);

  const user = useAuth();
  const dispatch = useDispatch();

  const fetchListConversation = async () => {
    try {
      const res = await getConversations(page, pageSize);
      if (res.status === 200) {
        setConversation(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListConversation();
  }, []);

  const renderNameConversation = (name) => {
    const x = name.title.split(',');
    const nameCVS = x.find((item) => item !== user.user_name);
    return nameCVS;
  };

  return (
    <div className="listChat_container">
      {
        conversation.map((item) => (
          <div key={item.conversation_id} className="listChat_item">
            <Link to={`/message/${item.conversation_id}`} className="link">
              <div>{renderNameConversation(item)}</div>
            </Link>
          </div>
        ))
      }
    </div>
  );
}

export default ListChats;
