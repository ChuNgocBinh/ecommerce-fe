import React, { useEffect, useState } from 'react';
import './comment.sass';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReactStars from 'react-stars';
import { useAuth } from 'hook/useAuth';
import { FormattedMessage } from 'react-intl';
import { createComment, getListCommentByProductId } from 'services/comment';
import { useParams } from 'react-router-dom';

function Comment({ cm }) {
  const user = useAuth();
  const [star, setStar] = useState(0);
  const [value, setValue] = useState('');
  const [comments, setListComments] = useState([]);
  const { product_id } = useParams();
  const handleClickCmt = async () => {
    try {
      const data = {
        product_id,
        createdBy: user.id,
        content: value,
        rate: star,
      };

      await createComment(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const getListComment = async () => {
  //   const res = await getListCommentByProductId(product_id);
  //   console.log(res);
  //   setListComments(res?.data?.data);
  // };

  // useEffect(() => {
  //   getListComment();
  // }, []);

  return (
    <div className="comment_container">
      <div className="comment_container-title">ĐÁNH GIÁ SẢN PHẨM</div>
      <div className="comment_filter">
        <div className="comment_rate-total">
          4.5 / 5
          <ReactStars
            count={5}
            size={30}
            value={4.5}
            color2="#ffd700"
            edit={false}
          />
        </div>
        <div className="comment_filter-btn">
          <button className="comment_filter-active">Tat ca</button>
          <button>5 sao</button>
          <button>4 sao</button>
          <button>3 sao</button>
          <button>2 sao</button>
          <button>1 sao</button>
          <button>{'< 1 sao'}</button>
        </div>
      </div>
      <div>
        <div className="comment_item-container">
          <div className="comment_img-user">
            <img src={user.profile_picture} alt="img" className="comment_img-avatar" />
          </div>
          <div className="comment_item-content">
            <div>
              <ReactStars
                count={5}
                size={30}
                value={star}
                color2="#ffd700"
                onChange={(newRating) => setStar(newRating)}
              // edit
              />
            </div>
            <div className="comment_item-input"><input className="input" value={value} onChange={(e) => setValue(e.target.value)} /></div>
            <button onClick={handleClickCmt} className="btn_small"><FormattedMessage id="comment.btn" /></button>
          </div>
        </div>
      </div>
      <div>
        {
          cm.map((item) => (
            <div key={item.id} className="comment_item-container">
              <div className="comment_img-user">
                <img src={item.avatar} alt="img" className="comment_img-avatar" />
              </div>
              <div className="comment_item-content">
                <div>{item.createdBy}</div>
                <div>
                  <ReactStars
                    count={5}
                    size={20}
                    value={item.rate}
                    color2="#ffd700"
                    edit={false}
                  />
                </div>
                <div className="comment_item-des">{item.content}</div>
                <div className="comment_item-like">
                  <div className="comment_item-icon">
                    <ThumbUpIcon fontSize="small" color="action" />
                  </div>
                  {item.like}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Comment;
