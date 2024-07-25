import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import { getCookie } from "cookies-next";
import {getTokenFromCookie } from '../../../../utils/tokenUtils.js'
import axios from "axios";
import EditProfile from "../../../../components/pages/userPanel/myProfileTab/EditProfilePass.js";

const PrivacyTab = () => {
  const [checkBox, setCheckBox] = useState("radio1");
  const [checkBox2, setCheckBox2] = useState(true); // Đã sửa ở đây

  const uId = getCookie('user_id');
  const token = getTokenFromCookie();

  const [modal, setModal] = useState();

  const [profileDetail, setProfileDetail] = useState({});

  useEffect(() => {

    axios.get('https://ehouseapi20230817222213.azurewebsites.net/api/User/LoggedUser', {
      headers: {
        Authorization: token,
      }
    })
      .then((response) => {
        setProfileDetail(response.data);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);


  // const handleDelete = (() => {

  //   const shouldDelete = window.confirm("Bạn có chắc xóa tài khoản này không?");
  //   alert('Chức năng xóa chưa thể thực hiện, mong bạn hãy đến trụ sở chúng tôi để thực hiện !')
  //   // if (shouldDelete) {
  //   //   axios.delete(`https://ehouseapi20230817222213.azurewebsites.net/api/User/Delete/${uId}`,{
  //   //   headers :{
  //   //     Authorization: token,
  //   //   }})
  //   //   .then((response) => {
  //   //     // Xử lý response thành công
  //   //     console.log("User Delete successfully:", response.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     // Xử lý lỗi khi request thất bại
  //   //     console.error("Error updating user:", error);
  //   //   });
  //   // }
  //   console.log(shouldDelete);
  // });

  return (
    <div className='dashboard-content'>
      <div className='privacy-setting' id='privacy'>
        <div className='common-card'>
          <div className='common-header'>
            <h5>Bảo vệ tài khoản</h5>
          </div>
          <div className='privacy-content'>
            <div className='media'>
              <div className='media-body'>
                <h6 className='font-roboto'>Bảo vệ tài khoản với 2 lớp bảo vệ</h6>
                <p className='font-roboto'>khuyến nghị tăng tính bảo mật tài khoản</p>
              </div>
              <label className='switch'>
                <Input type='radio' name='radio1' checked={checkBox && true} onChange={() => setCheckBox(!checkBox)} />
                <span className='switch-state'></span>
              </label>
            </div>
            <div className='media'>
              <div className='media-body'>
                <h6 className='font-roboto'>Bảo mật thông thường</h6>
              </div>
              <label className='switch'>
                <Input type='radio' name='radio1' checked={!checkBox && true} onChange={() => setCheckBox(!checkBox)} />
                <span className='switch-state'></span>
              </label>
            </div>
            <button type='button' className='btn btn-gradient btn-pill'>
              Lưu thay đổi
            </button>
          </div>
          <div className='privacy-content'>
            <h5>Cài đặt tài khoản</h5>
            <div className='media'>
              <div className='media-body'>
                <h6 className='font-roboto'>Thay đổi mật khẩu tài khoản này</h6>
                <p className='font-roboto'> </p>
              </div>
              {/* <label className='switch'>
              <input type='checkbox' checked={checkBox2} onChange={() => setCheckBox2(!checkBox2)} />
                <span className='switch-state'></span>
              </label> */}
            </div>
            <span className='btn btn-gradient btn-pill' onClick={() => setModal("editProfile")}>
                Chỉnh sửa
            </span>
          </div>
        </div>
      </div>
      <EditProfile toggle={"editProfile" === modal ? true : false} setModal={setModal} profileDetail={profileDetail} />
    </div>
  );
};

export default PrivacyTab;
