import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import './myProfile.scss';
import {
  Avatar, Button, MenuItem, MenuList,
} from '@mui/material';
import EditMyProfile from './editProfile';
import { getMe } from 'services/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUserInfo } from 'redux/appSLice';

function MyProfile() {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [profile, setProfile] = useState({});
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleMyProfile = () => {
    setIsEdit(false);
  };
  const handleLogOut = () => {
    navigate('/login');
    localStorage.removeItem('AuthToken');
    dispatch(changeUserInfo(''));
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await getMe();
        setProfile(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (isEdit === false) {
      getProfile();
    }
  }, [isEdit]);
  return (
    <div className="cardPersonal">
      <Card sx={{ minWidth: '30%', height: '66vh' }}>
        <CardContent>
          <div className="avatar_info">
            <Avatar
              alt="Remy Sharp"
              src={`${profile?.profile_picture}`}
              sx={{ width: 70, height: 70 }}
            />
            <div className="info">
              <p className="userName">{profile?.user_name}</p>
              <Button className="info_action" onClick={handleEdit}>
                <EditIcon sx={{ width: 20, height: 20 }} />
                <span className="edit">Sửa hồ sơ</span>
              </Button>
            </div>
          </div>
          <MenuList>
            <MenuItem onClick={handleMyProfile}>
              <PersonOutlineOutlinedIcon />
              <span className="text_icon">Hồ sơ cá nhân</span>
            </MenuItem>
            <MenuItem>
              <LocalMallOutlinedIcon />
              <span className="text_icon">Đơn mua</span>
            </MenuItem>
            <MenuItem onClick={handleLogOut}>
              <LogoutIcon />
              <span className="text_icon">Đăng xuất</span>
            </MenuItem>
          </MenuList>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: '68%', height: '66vh' }}>
        {isEdit ? (
          <CardContent>
            <EditMyProfile setIsEdit={setIsEdit} />
          </CardContent>
        ) : (
          <CardContent>
            <h3>Thông tin cá nhân</h3>
            <p className="content_row">
              Tên đăng nhập:
              {' '}
              <b>
                {' '}
                {profile?.user_name}
              </b>
            </p>
            <p className="content_row">
Mật khẩu:
              {' '}
              <b>**********</b>
            </p>
            <p className="content_row">
Email:
              {' '}
              <b>
                {profile?.email}
              </b>
            </p>
            <p className="content_row">
              Số điện thoại:
              {' '}
              <b>
                {profile?.phone_number}
              </b>
            </p>
            <p className="content_row">
Địa chỉ:
              {' '}
              <b>
                {profile?.address}
              </b>
            </p>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
export default MyProfile;
