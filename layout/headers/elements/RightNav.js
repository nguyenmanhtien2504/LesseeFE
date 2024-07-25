/**
 * It maps through the RightNavMenuItem array and returns the appropriate component based on the title
 * of the object
 * @returns A list of items that are being mapped over.
 */
import Link from "next/link";
import React, { Fragment, Profiler, useEffect, useState } from "react";
import { User, LogOut } from "react-feather";
import { RightNavMenuItem } from "../../../data/menu";
import Cart from "./rightNavComponents/Cart";
// import Currency from "./rightNavComponents/Currency";
// import Language from "./rightNavComponents/Language";
import {getTokenFromCookie } from '../../../utils/tokenUtils.js'
import axios from 'axios';
import { useRouter } from "next/router";
import { hasCookie,deleteCookie, setCookie  } from 'cookies-next';


const RightNav = () => {
  const router = useRouter();
  const expires = new Date();
  expires.setDate(expires.getDate() + 1);

  const [UserProfile, setUserProfile] = useState({});
  let isLogined = hasCookie('token');

  useEffect(() => {
    const token = getTokenFromCookie();

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

  const handleUserButtonClick = () => {
    if (isLogined) {
      deleteCookie('token')
      deleteCookie('lesseeId')
      deleteCookie('uid')
      deleteCookie('user_id')
      localStorage.removeItem('valueHouse');
      router.push('/pages/other-pages/login')
    } else {
      router.push('/pages/other-pages/login')
    }
  };
  let greetingStyle = { color: "white" };

  console.log(UserProfile);

  setCookie('uid', UserProfile.uId, {expires});
  
  return (
    <ul className="header-right">
      <li className="right-menu">
        <ul className="nav-menu">
            <Fragment>
              {/* {value.title === "language" && <Language value={value} />} */}
              {/* {<Cart />} */}
              {/* {value.title === "currency" && <Currency value={value} />} */}
              
                <span style={greetingStyle}>|Xin chào {UserProfile.username}</span>
                <li className="dropdown">
                  <button onClick={handleUserButtonClick}>
                  {isLogined ? (<LogOut/>):(<User />)}
                  </button>
                </li>
            </Fragment>
        </ul>
      </li>
    </ul>
  );
};

export default RightNav;
