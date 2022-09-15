import React, { useEffect, useState } from 'react';
import './listChats.sass';
import { useAuth } from 'hook/useAuth';

import { useDispatch } from 'react-redux';
import { getConversations } from 'services/conversation';

function ListChats() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const user = useAuth();
  const dispatch = useDispatch();

  const fetchListConversation = async () => {
    try {
      const res = await getConversations(page, pageSize);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListConversation();
  }, []);

  return (
    <div className="listChat_container">
      đây là list chat
    </div>
  );
}

export default ListChats;
