import React from "react";
import {getTokenFromCookie } from '../../../utils/tokenUtils.js'
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";


const Step4 = ({ setActiveTab, data ,value }) => {

  const today = new Date();

  const day = today.getDate(); // Ngày trong tháng (1 đến 31)
const month = today.getMonth() + 1; // Tháng trong năm (0 - 11), cần +1 để chuyển sang 1-12
const year = today.getFullYear(); // Năm

  const lesId = parseInt(getCookie('lesseeId'));
  const token = getTokenFromCookie()
  const router = useRouter();


//2
  const changeStatusHouse = async () => {
    try {
      const response = await fetch(`https://ehouseapi20230817222213.azurewebsites.net/api/HouseRent/UpdateHouseStatus/${value.hoId}`, {
          method: 'PUT',
          headers: {
              Authorization: token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            houseStatus: true,
          }),
        });
        const responseText = await response.text();

        if (response.ok) {
          if (responseText === "SUCCESS") {
            console.log('Update nhà thuê thành công');
          } else {
            // Handle other responses if needed
            console.log('Update nhà thuê không thành công');
          }
        } else {
          // Xử lý đăng nhập thất bại
          setError('Update thất bại');
        }

  } catch (error) {
      console.error('Đã xảy ra lỗi:', error);
  }
  }

  const handleClick = async () => {

    const contractInfo = {
      ContractApproveDay: "",
        contractContent: "Nộp trước 1 tháng tiền thuê",
        contractCreatedDay: `${day}-${month}-${year}` ,
        TenancyPeriod: data.TenancyPeriod,
        hoId: value.hoId,
        houseRentName: value.houseRentName,
        rentPrice: value.rentPrice,
        statusAdminId: false,
        leId : value.leId,
        statusLessorId:false,
        lesId: lesId
      }

    setActiveTab(1);

    console.log(contractInfo)
    
    try {
      // Gửi yêu cầu POST đến API đăng nhập
      const response = await fetch('https://ehouseapi20230817222213.azurewebsites.net/api/Contract/AddContract', {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contractInfo),
      });

      const responseText = await response.text();

      if (response.ok) {
        if (responseText === "SUCCESS") {
          console.log('Nộp đơn đăng kí thuê nhà thành công');
          alert('Nộp đơn đăng kí thuê nhà thành công')
          changeStatusHouse()
          router.push('/pages/user-panel/user-dashboard')
        } else {
          // Handle other responses if needed
          console.log('Nộp đơn đăng kí thuê nhà không thành công {1}');
          alert('Nộp đơn đăng kí thuê nhà không thành công')
        }
      } else {
        // Xử lý đăng nhập thất bại
        alert('Nộp đơn đăng kí thuê nhà không thành công{2}')
      }
    } catch (error) {
      alert('Nộp đơn đăng kí thuê nhà không thành công, lỗi sever')
      console.error('Đã xảy ra lỗi:', error);
    }
  }

  return (
    <div className="wizard-step-4 ">
      <div className="complete-details">
        <div>
          <img src="/assets/images/inner-pages/4.svg" className="img-fluid" alt="" />
          <h3>Cảm ơn bạn!!</h3>
          <h6>Chúc mừng, bạn đã trãi qua thành công các bước để thuê nhà</h6>
          <p className="font-roboto">
            Bạn hãy xác nhận nút bên dưới để hoàn thành tạo đơn hợp đồng
          </p>
          <button
            className="btn btn-gradient step-again btn-pill"
            onClick={handleClick}>
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
