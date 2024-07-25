/**
 * It takes the file from the input field and displays it in the image tag
 * @returns A Col component with a div inside of it.
 */
import React ,{useState, useEffect}from "react";
import { Camera } from "react-feather";
import { Col, Nav, NavItem, NavLink } from "reactstrap";
import axios from 'axios';
import {getTokenFromCookie } from '../../../utils/tokenUtils.js'


const UserPanelSidebar = ({ activeTab, setActiveTab }) => {

  const token = getTokenFromCookie();
  const [UserProfile, setUserProfile] = useState({});


  useEffect(() => {

    axios.get('https://ehouseapi20230817222213.azurewebsites.net/api/User/LoggedUser', {
      headers: {
        Authorization: token,
      }
    })
      .then((response) => {
        setUserProfile(response.data);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);



  return (
    <Col lg='3'>
      <div className='sidebar-user sticky-cls'>
        <div className='user-profile'>
          <div className='media'>
            <div className='change-pic'>
              <img src={UserProfile.avatar} className='img-fluid update_img' alt='' />
              <div className='change-hover'>
                <button type='button' className='btn'>
                  <Camera />
                </button>
                <input
                  className='updateimg'
                  type='file' 
                  name='img'
                  // onChange='readURL(this,0)'
                />
              </div>
            </div>
            <div className='media-body'>
              <h5>{UserProfile.fullName}</h5>
              <h6 className='font-roboto'>{UserProfile.gmail}</h6>
              <h6 className='font-roboto mb-0'>{`(+84) ${UserProfile.phoneNumber}`}</h6>
            </div>
          </div>
          <div className='connected-social'>
            <h6>Kết nối với</h6>
            <ul className='agent-social'>
              <li>
                <a href='https://www.facebook.com/' className='facebook'>
                  <i className='fab fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/' className='twitter'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='https://account.google.com' className='google'>
                  <i className='fab fa-google'></i>
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/' className='linkedin'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='dashboard-list'>
          <Nav tabs className='right-line-tab'>
            <NavItem>
              <NavLink className={activeTab === "Dashboard" ? "active" : ""} onClick={() => setActiveTab("Dashboard")}>
                Bảng hợp đồng
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink className={activeTab === 'Listing' ? 'active' : ''} onClick={() => setActiveTab('Listing')}>
                My Listing
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink className={activeTab === "CreateProperty" ? "active" : ""} onClick={() => setActiveTab("CreateProperty")}>
                create property
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className={activeTab === "Profile" ? "active" : ""} onClick={() => setActiveTab("Profile")}>
                Thông tin
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink className={activeTab === "Favorites" ? "active" : ""} onClick={() => setActiveTab("Favorites")}>
                favourites
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink className={activeTab === "Paymnet" ? "active" : ""} onClick={() => setActiveTab("Paymnet")}>
                Cards & payment
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className={activeTab === "Privacy" ? "active" : ""} onClick={() => setActiveTab("Privacy")}>
                Bảo mật
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </Col>
  );
};

export default UserPanelSidebar;
