import React from 'react';
import './comment.sass';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReactStars from 'react-stars';

function Comment({ cm }) {
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
