/**
 * It returns a div with a class of property-box, which contains a div with a class of property-image,
 * which contains an ImageSlider component, which contains an array of images, which are passed in as a
 * prop
 * @returns A React component.
 */
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { Camera } from "react-feather";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";
import ImageSlider from "../ImageSlider";
import PropertyLabel from "../PropertyLabel";
import ThumbnailSlider from "../ThumbnailSlider";
import AddToCompareProducts from "../AddToCompareProducts";
import AddToWhishList from "../AddToWhishList";
import Img from "../../../utils/BackgroundImageRatio";
import axios from "axios"; 

const PropertyBox = ({ data, relativeSlider, video }) => {

  const status = 'open house'
  const [load, setLoad] = useState(true);


  const [value, setValue] = useState([]); 
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(
              "https://ehouseapi20230817222213.azurewebsites.net/api/HouseImage/GetHouseImageByHoId/" + data.hoId);
            setValue(response.data); // Thêm .data vào response
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      const aImg = value.map((value) => value.houseImageCode); 

      const numberWithCommas = (number) => {
        return number.toLocaleString();
      };
  return (
    <>
      {!load ? (
        <div className="property-box">
          <div className="property-image">
            {/* {relativeSlider ? <ThumbnailSlider images={data.img} videoData={data.video} video={video} /> : <ImageSlider images={data.img} />} */}
            <ImageSlider images={aImg} />
            <div className="labels-left">
              <PropertyLabel labels={data?.houseStatus} />
            </div>
            {!relativeSlider && (
              <>
                <div className="seen-data">
                  <Camera />
                  <span>{aImg.length}</span>
                </div>
              </>
            )}
          </div>

          <div className="property-details">
            {/* <span className="font-roboto">{data.country || "USA"} </span> */}
            <Link href={`/property/image-slider/?id=${data.hoId}`}>
              <h3>{data.houseRentName}</h3>
            </Link>
            <h6>
              {numberWithCommas(data.rentPrice)} VND
            </h6>
            <p className="font-roboto">{data.detail || "Loading ..."} </p>
            <ul>
              <li>
                <img src="/assets/images/svg/icon/double-bed.svg" className="img-fluid" alt="" />
                Giường : {data.bed ||  "Loading ..."}
              </li>
              <li>
                <img src="/assets/images/svg/icon/bathroom.svg" className="img-fluid" alt="" />
                Vệ sinh : {data.restroom ||  "Loading ..."}
              </li>
              <li>
                <img src="/assets/images/svg/icon/square-ruler-tool.svg" className="img-fluid ruler-tool" alt="" />
                Diện tích : {data.area ||  "Loading ..."}
              </li>
            </ul>
            <div className="property-btn d-flex">
              {/* <span>{data.date}</span> */}
              <Link href={`/property/image-slider/?id=${data.hoId}`}>
                <button type="button" className="btn btn-dashed btn-pill">
                  Chi tiết
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <ContentLoader className="skeleton-svg">
            {setTimeout(() => {
              setLoad(false);
            }, 1000)}
            <rect className="skeleton-img" />
            <rect className="skeleton-c1" />
            <rect className="skeleton-c2" />
            <rect className="skeleton-c3" />
          </ContentLoader>
        </>
      )}
    </>
  );
};

export default PropertyBox;
