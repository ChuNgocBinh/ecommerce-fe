import React from 'react';
import { useForm } from 'react-hook-form';
import { editUser } from 'services/user';
import { NotificationManager } from 'react-notifications';
import './myProfile.scss';
import { FormattedMessage } from 'react-intl';

function EditMyProfile({ setIsEdit }) {
  const { register, handleSubmit } = useForm();

  const onSubmitProfile = async (data) => {
    const submitData = {
      ...data,
    };

    await editUser(submitData).then((res) => {
      NotificationManager.success(
        'Create success',
        <FormattedMessage id="notification.success" />,
        setIsEdit(false),
      );
    })
      .catch((e) => {
        console.log(e);
        NotificationManager.error(
          'Create error',
          <FormattedMessage id="notification.error" />,
        );
      });
  };

  return (
    <>
      <h3 style={{ marginLeft: '150px' }}>Chỉnh sửa hồ sơ</h3>
      <form onSubmit={handleSubmit(onSubmitProfile)} className="form_content">
        <div className="form_group">
          <label>
            Tên đăng nhập:
          </label>
          <input className="form_row" {...register('user_name')} />
        </div>
        <div className="form_group">
          <label>
            Email:
          </label>
          <input className="form_row" {...register('email')} />
        </div>
        <div className="form_group">
          <label>
            Số điện thoại:
          </label>
          <input className="form_row" {...register('phone_number')} />
        </div>
        <div className="form_group">
          <label>
            Địa chỉ:
          </label>
          <input className="form_row" {...register('address')} />
        </div>

        <button type="submit" className="btn btn_save">
          Lưu
        </button>
      </form>
    </>
  );
}
export default EditMyProfile;
