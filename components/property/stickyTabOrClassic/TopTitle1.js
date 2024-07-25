import React, { useState } from "react";
import { Facebook, Instagram, Printer, Twitter } from "react-feather";
import { Container } from "reactstrap";
import ReviewStarr from "../../elements/ReviewStarr";

const TopTitle = ({ singleData1 }) => {
  const [like, setLike] = useState(false);
  const numberWithCommas = (number) => {
    return number.toLocaleString();
  };
  return (
    <div className="single-property-section">
      <Container>
        <div className="single-title">
          <div className="left-single">
            <div className="d-flex">
              <h2 className="mb-0">{singleData1?.houseRentName || "Loading..."}</h2>
              <span>
                {singleData1?.houseStatus ? (<span className="label label-shadow ms-2">Nhà đã thuê</span>)
                : (<span className="label label-success ms-2">Nhà chưa thuê</span>)
                }
              </span>
            </div>
            <p className="mt-1">{singleData1?.address}</p>
            <ul>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                  <span>{singleData1?.bed + " " || "Loading..."}Phòng ngủ</span>
                </div>
              </li>
              <li>
                <div>
                  <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                  <span>{singleData1?.restroom + " " || 'Loading...'} Nhà vệ sinh</span>
                </div>
              </li>
              {/* <li>
                <div>
                  <img src="/assets/images/svg/icon/sofa.svg" className="img-fluid" alt="" />
                  <span>{singleData1?.halls || 4} Halls</span>
                </div>
              </li> */}
              <li>
                <div>
                  <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                  <span>{singleData1?.area || 'Loading...'} m2</span>
                </div>
              </li>
              {/* <li>
                <div>
                  <img src="/assets/images/svg/icon/garage.svg" className="img-fluid" alt="" />
                  <span>1 Garage</span>
                </div>
              </li> */}
            </ul>
            <div className="share-buttons">
              <div className="d-inline-block">
                <a className="btn btn-gradient btn-pill">
                  <i className="fas fa-share-square"></i>
                  share
                </a>
                <div className="share-hover">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/" className="icon-facebook" target="_blank" rel="noreferrer">
                        <Facebook></Facebook>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/" className="icon-twitter" target="_blank" rel="noreferrer">
                        <Twitter></Twitter>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" className="icon-instagram" rel="noreferrer">
                        <Instagram></Instagram>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <a className="btn btn-dashed btn-pill ms-md-2 ms-1 save-btn" onClick={() => setLike(!like)}>
                <i className={`${like ? "fas" : "far"} fa-heart`}></i>
                Save
              </a> */}
              {/* <a className="btn btn-dashed btn-pill ms-md-2 ms-1" onClick={() => window.print()}>
                <Printer />
                Print
              </a> */}
            </div>
          </div>
          <div className="right-single">
            <h2 className="price">
              {numberWithCommas(singleData1?.rentPrice || "Loading...")} VND <span></span>
            </h2>
            <div className="feature-label">
              {singleData1?.wifi && (<span className="btn btn-dashed btn-pill">Wi-fi</span>)}
              {singleData1?.airConditioning && (<span className="btn btn-dashed btn-pill">Điều hòa</span>)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopTitle;
