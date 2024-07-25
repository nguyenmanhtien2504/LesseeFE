/**
 * It returns a div with a class of advance-card, which contains a h6 with the text "Contact Info",
 * which contains a div with a class of category-property, which contains a div with a class of
 * agent-info, which contains a div with a class of media, which contains an img with a class of
 * img-50, which contains a div with a class of media-body ms-2, which contains a h6 with the text
 * "Jonathan Scott", which contains a p with the text "Contact@gmail.com", which contains a ul, which
 * contains two li's, which contain an i with a class of me-2, which contains the text "A-32, Albany,
 * Newyork." and "(+066) 518 - 457 - 5181"
 * @returns A div with a class of advance-card.
 */
import React, { useEffect, useState } from 'react'
import { MapPin, PhoneCall } from "react-feather";
import axios from "axios"; 

const ContactInfo = ({singleData1}) => {
  
  const [value, setValue] = useState({});
  const [lessor, setLessor ] = useState({});
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://ehouseapi20230817222213.azurewebsites.net/api/HouseRent/GetHouseRentsById/" + singleData1.hoId);
          setValue(response.data); // Thêm .data vào response
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [singleData1.hoId]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://ehouseapi20230817222213.azurewebsites.net/api/User/GetLessorByLessorId/" + value.leId);
            setLessor(response.data); // Thêm .data vào response
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [value.leId]);

    console.log(value);
    console.log(value.leId);
    console.log(singleData1.hoId);
    console.log(lessor);

  return (
    <div className='advance-card'>
      <h6>Người cho thuê</h6>
      <div className='category-property'>
        <div className='agent-info'>
          <div className='media'>
            <img src={lessor.avatar} className='img-50' alt='' />
            <div className='media-body ms-2'>
              <h6>{lessor.fullName}</h6>
              <p>{lessor.gmail}</p>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <MapPin className='me-2' />
            {lessor.address}
          </li>
          <li>
            <PhoneCall className='me-2' />
            {lessor.phoneNumber}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
