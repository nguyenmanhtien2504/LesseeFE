import React, { useEffect, useState } from "react";
import { MoreHorizontal, Link } from "react-feather";
import Img from "../../../../utils/BackgroundImageRatio";
import axios from "axios"; 
import {  getCookie, setCookie  } from 'cookies-next';
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {getTokenFromCookie } from '../../../../utils/tokenUtils.js'
import { useRouter } from "next/router";

const PropertyOverview = () => {
  const router = useRouter();

  const [LesseeId, setLesseeId] = useState(); 

  const token = getTokenFromCookie();

  const uId = getCookie('user_id'); 

  const expires = new Date();
  expires.setDate(expires.getDate() + 1);  

  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };

  useEffect(() => {
    axios.get(`https://ehouseapi20230817222213.azurewebsites.net/api/User/GetLesseeByUserId/${uId}`)
      .then((response) => {
        setCookie('lesseeId', response.data.lesId, {expires});
        setLesseeId(response.data.lesId)
        console.log("Lessee ID:", response.data.lesId); 
      })
      .catch((error) => {
        console.error('Error:', error); 
      });
  }, [uId]);

  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    setModal(true);
  };

  const [contractData, setcontractData] = useState([]);

  const actionsCellStyle = {
    cursor: 'pointer', // Đổi con trỏ chuột thành bàn tay trỏ
  };

  useEffect(() => {
    
    const fetchData = async () => {
        try {
            const response = await axios.get(
                `https://ehouseapi20230817222213.azurewebsites.net/api/Contract/GetContractsByLesseeId/${LesseeId}`
                , {
                  headers: {
                    Authorization: token,
                  }
                });
            setcontractData(response.data); // Thêm .data vào response
            console.log('thành công')
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
  }, [LesseeId]);

  const handleLinkClick = (item) => {
    const url = '/property/image-slider?id=' + item.hoId ;
    window.open(url);
  };

  console.log(contractData);

  return (
    <div className='col-xl-12 xl-60 col-md-12'>
      <div className='common-card property-overview'>
        <div className='common-header'>
          <h5>Danh sách hợp đồng nhà thuê</h5>
        </div>
        <div className='table-responsive'>
          <table className='table table-bordernone'>
            <thead>
              <tr>
                <th>Tên nhà</th>
                <th>Giá nhà</th>
                <th>Ngày tạo</th>
                <th>Trạng thái Admin</th>
                <th>Trạng thái Lessor</th>
                <th>chi tiết nhà</th>
                <th>xem đơn</th>
              </tr>
            </thead>
            <tbody>
              {
                contractData && contractData.map((item, i) => {
                  const datePart = item.contractCreatedDay;
                  return (
                    <tr key={i}>
                    <td>
                      <div className='d-flex'>
                        <h6>{item.houseRentName}</h6>
                      </div>
                    </td>
                    <td>{numberWithCommas(item.rentPrice)}</td>
                    <td>{datePart}</td>
                    {item.statusAdminId ? (<td>
                      <span className='label label-light label-success'>Đã duyệt</span>
                    </td>):(
                      <td>
                      <span className='label label-light'>Chưa duyệt</span>
                    </td>
                    )}
                    {item.statusLessorId ? (<td>
                      <span className='label label-light label-success'>Đã duyệt</span>
                    </td>):(
                      <td>
                      <span className='label label-light'>Chưa duyệt</span>
                    </td>
                    )}
                    <td style={actionsCellStyle} onClick={() => handleLinkClick(item)}>
                      <Link />
                    </td>
                    <td style={actionsCellStyle} onClick={() => handleClick(item)}>
                      <MoreHorizontal />
                    </td>
                  </tr>
                  )
                })
              }
            </tbody>
            <Modal isOpen={modal} toggle={() => setModal(!modal)}> 
              <ModalHeader>
                <strong>Hợp đồng thuê nhà</strong>
              </ModalHeader>              
              <ModalBody>
              {selectedItem && (
                  <>
                    <p className="m-1">Tên nhà : {selectedItem.houseRentName}</p>
                    <br />
                    <p className="m-1">Giá nhà : {numberWithCommas(selectedItem.rentPrice)} VND</p>
                    <br />
                    <p className="m-1">Ngày tạo đơn : {selectedItem.contractCreatedDay}</p>
                    <br />
                    <p className="m-1">Trạng thái Admin : {selectedItem.statusAdminId ? ('Đã duyệt'):('Chưa duyệt')}</p>
                    <br />
                    <p className="m-1">Trạng thái Lessor : {selectedItem.statusLessorId ? ('Đã duyệt'):('Chưa duyệt')}</p>
                    <br />
                    <p className="m-1">Thời gian thuê : {selectedItem.tenancyPeriod} Tháng</p>
                    <br />
                    <p className="m-1">Chính sách cọc hợp đồng : {selectedItem.contractContent} Tháng</p>
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={() => {setModal(false); console.log('yes')}}>
                  Hoàn tất
                </Button>
                <Button color="primary" onClick={() => {window.open(`/PDF?id=${selectedItem.conId}`, '_blank'); }}>
                  Tải hợp đồng
                </Button>
              </ModalFooter>
            </Modal>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertyOverview;
