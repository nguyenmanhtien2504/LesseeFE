import React, { useEffect, useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import axios from "axios";
import NoSsr from "../../../../utils/NoSsr";

const infoBoxStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
  maxWidth: '300px',
  width: '100%',
  zIndex: '999',
  transition: 'opacity 0.3s ease-in-out',
};

const closeButtonStyles = {
  marginTop: '20px',
};

const headingStyles = {
  margin: '0 0 10px',
  fontSize: '18px',
};

const paragraphStyles = {
  margin: '0',
};

const linkStyles = {
  display: 'inline-block',
  marginLeft: '40px',
};

const customMarkerStyle = {
  backgroundColor: 'red', // Đổi màu sắc thành màu đỏ
  borderRadius: '50%', // Đổi hình dạng thành hình tròn
};

const PigeonMap = () => {
  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchUserLocation = () => {
  //     if ("geolocation" in navigator) {
  //       // Sử dụng Geolocation API để lấy vị trí hiện tại
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           setLatitude(position.coords.latitude);
  //           setLongitude(position.coords.longitude);
  //         },
  //         (error) => {
  //           setError(error.message);
  //         }
  //       );
  //     } else {
  //       setError("Geolocation không hỗ trợ trình duyệt của bạn");
  //     }
  //   };

  //   fetchUserLocation();
  // }, [latitude, longitude]);

  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ehouseapi20230817222213.azurewebsites.net/api/HouseRent/GetHouseRents`
        );
        setValue(response.data); // Thêm .data vào response
        setIsLoading(false);
        localStorage.setItem("valueHouse", JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchData();
 
    const localValue = localStorage.getItem("valueHouse");
    if (localValue) {
      setValue(JSON.parse(localValue));
      setIsLoading(false);
    } else {
      fetchData(); 
    }
  }, []);

  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleCloseClick = () => {
    setSelectedMarker(null);
  };

  const renderMarkers = () => {
    return value.map((marker, index) => (
      <Marker
        key={index}
        anchor={[marker.latitude, marker.longitude]}
        onClick={() => handleMarkerClick(marker)}
        style={marker.houseStatus ? (customMarkerStyle):('') }
      />
    ));
  };

  return (
    <>
      <NoSsr>
          {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Map center={[16.011215233825823, 108.25455782995712]} defaultZoom={13}>
          {renderMarkers()}
          <ZoomControl />
          {selectedMarker && (
            <div style={infoBoxStyles}>
              <h3 style={headingStyles}>{selectedMarker.houseRentName}</h3>
              <p style={paragraphStyles}>Diện tích: {selectedMarker.area}</p>
              <p style={paragraphStyles}>Giá: {selectedMarker.rentPrice}</p>
              <p style={paragraphStyles}>Phòng ngủ: {selectedMarker.bed}</p>
              <p style={paragraphStyles}>
                Nhà vệ sinh: {selectedMarker.restroom}
              </p>
              <p style={paragraphStyles}>Địa chỉ: {selectedMarker.address}</p>
              <p style={paragraphStyles}>Trạng thái: {selectedMarker?.houseStatus ? ('Nhà đã thuê'):('Nhà chưa thuê')}</p>
              <button style={closeButtonStyles} onClick={handleCloseClick}>
                Đóng
              </button>
              <a
                style={linkStyles}
                href={`/property/image-slider?id=${selectedMarker.hoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Thêm thông tin
              </a>
            </div>
          )}
        </Map>
      )}
      </NoSsr>
    </>
  );
};

export default PigeonMap;
