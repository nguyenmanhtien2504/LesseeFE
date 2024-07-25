import React, { useState, useEffect } from "react";
import { CheckSquare, Mail, MapPin, Lock } from "react-feather";
import { Row } from "reactstrap";
import EditProfile from "./EditProfile";
import axios from 'axios';
import {getTokenFromCookie } from '../../../../utils/tokenUtils.js'

const MyProfileTab = () => {
  const [modal, setModal] = useState();

  const token = getTokenFromCookie();
  const [profileDetail, setProfileDetail] = useState({});

  const [showpassword, setShowpassword] = useState(false);


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

  return (
    <div className="dashboard-content">
      <div className="my-profile" id="profile">
        <div className="profile-info">
          <div className="common-card">
            <div className="user-name media">
              <div className="media-body">
                <h5>
                  {profileDetail.fullName} <span className="label label-success">Đã xác thực người dùng</span>
                </h5>
              </div>
              <span className="label label-light label-flat" onClick={() => setModal("editProfile")}>
                Chỉnh sửa
              </span>
            </div>
            <ul className="user-detail">
              <li>
                <MapPin />
                <span>{profileDetail.address}</span>
              </li>
              <li>
                <Mail />
                <span>{profileDetail.gmail}</span>
              </li>
              <li>
                <CheckSquare />
                <span>Tài khoản đã xác thực</span>
              </li>
            </ul>

          </div>
          <div className="common-card">
            <Row>
              <div className="col-xxl-6 col-xl-7">
                <div className="information-detail">
                  <div className="common-header">
                    <h5>Thông tin</h5>
                  </div>
                  <div className="information">
                    <ul>
                    <li>
                        <span>ID người dùng :</span>
                        <p>{profileDetail.uId}</p>
                      </li>
                      <li>
                        <span>Giới tính :</span>
                        <p>{profileDetail.gender}</p>
                      </li>
                      <li>
                        <span>Ngày tháng năm sinh :</span>
                        <p>{profileDetail.dateofbirth}</p>
                      </li>
                      <li>
                        <span>Số điện thoại :</span>
                        <a>{`(+84) ${profileDetail.phoneNumber}`}</a>
                      </li>
                      <li>
                        <span>Căn cước công dân :</span>
                        <p>{profileDetail.citizenIdentification}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="information-detail">
                  <div className="common-header">
                    <h5> Chi tiết đăng nhập</h5>
                  </div>
                  <div className="information">
                    <ul>
                      <li>
                        <span>Tên đăng nhập :</span>
                        <a>{profileDetail.username}</a>
                      </li>
                      <li>
                      <div className="input-group-prepend">
                        <span>Mật khẩu :</span>
                        <a>{showpassword ? profileDetail?.password : "********"}</a>
                        <i
                          id="pwd-icon"
                          className={`far fa-eye${!showpassword ? "-slash" : ""}`}
                          onClick={() => {
                            setShowpassword(!showpassword);
                          }}
                        />
                      </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-0">
                <div className="about-img d-xl-block d-none">
                  <img src={profileDetail.avatar} className="img-fluid" alt="" />
                </div>
              </div>
            </Row>
          </div>
        </div>
      </div>
      <EditProfile toggle={"editProfile" === modal ? true : false} setModal={setModal} profileDetail={profileDetail} />
    </div>
  );
};

export default MyProfileTab;
