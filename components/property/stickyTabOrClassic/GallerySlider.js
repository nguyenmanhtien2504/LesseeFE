/**
 * It takes an array of images and returns a slider with the images
 * @returns The return statement is used to return a value from a function.
 */
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { galleryFor, galleryNav } from "../../../data/slickSlider";
import Img from "../../../utils/BackgroundImageRatio";
import NoSsr from "../../../utils/NoSsr";
import axios from "axios"; 


const GallerySlider = ( {singleData1} ) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const [value, setValue] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://ehouseapi20230817222213.azurewebsites.net/api/HouseImage/GetHouseImageByHoId/" + singleData1.hoId);
          setValue(response.data); // Thêm .data vào response
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [singleData1.hoId]);
    console.log(singleData1.hoId)

    const HomeImage = value.map((value) => value.houseImageCode);
    console.log(HomeImage); 

  return (
    <NoSsr>
      <Slider className="gallery-for" {...galleryFor} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {HomeImage.map((data, i) => (
          <div key={i}>
            <div>
              <Img src={data} className="bg-img" /> 
            </div>
          </div>
        ))}
      </Slider>
      <Slider className="gallery-nav p-1" {...galleryNav} asNavFor={nav1} ref={(slider2) => setNav2(slider2)}>
        {HomeImage.map((data, i) => (
          <div key={i}>
            <div>
              <Img className="img-fluid bg-img" src={data} />
            </div>
          </div>
        ))}
      </Slider>
    </NoSsr>
  );
};

export default GallerySlider;
