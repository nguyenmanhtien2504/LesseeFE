import React, { useEffect, useState } from "react";

import NavbarThree from "../../../layout/headers/NavbarThree";

import FooterOne from "../../../layout/footers/FooterOne";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../../components/pages/userPanel";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";

const UserDashboard = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const expires = new Date();
  expires.setDate(expires.getDate() + 1);

  const router = useRouter();

  const uId = getCookie('uid');
  setCookie('user_id', uId, {expires});

  useEffect(() => {
    if (hasCookie("token")) {
      setShowDashboard(true);
    } else {
      setShowDashboard(false);
      router.push("/pages/other-pages/login");
    }
  }, []); 
  return (
    <>
      {showDashboard && (
        <>
          <NavbarThree />
          <Breadcrumb />
          <BodyContent active={"Dashboard"}/>
          <FooterOne />
        </>
      )}
    </>
  );
};

export default UserDashboard;
