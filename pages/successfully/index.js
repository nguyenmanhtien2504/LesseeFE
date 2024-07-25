import React, { useEffect, useState } from "react";
import { getTokenFromCookie } from "../../utils/tokenUtils.js";
import { useRouter } from "next/router";

const success = () => {
  const router = useRouter();
  const [verify, setVerify] = useState(false);
  const { Uid } = router.query;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://ehouseapi20230817222213.azurewebsites.net/api/User/VerifyEmail?id=${Uid}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
        });
        if (response.ok) {
          console.log(response);
          setVerify(true);
        } else {
          console.log(response);
          setVerify(false);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [Uid]);

  const handleVerify = () => {
    router.push('/pages/other-pages/login');
  };

  return (

    <div
      style={{
        display: "flex",
        flexDirection: "column", // Hiển thị các phần tử con theo chiều dọc
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        {verify ? <h1>Bạn đã xác thực thành công</h1> : <h1>Loading ...</h1>}
      </div>
      <br/>
      <button onClick={handleVerify} className="btn btn-gradient btn-lg" style={{ marginTop: "20px" }}>
        Trang đăng nhập
      </button>
    </div>
  );
};

export default success;
