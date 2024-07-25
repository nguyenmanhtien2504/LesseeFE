/**
 * It returns a div with a class of 'desc-box' that contains a div with a class of 'page-section' that
 * contains a h4 with a class of 'content-title' that contains the text 'Reviews' and a div with a
 * class of 'review' that contains a div with a class of 'review-box' that contains a div with a class
 * of 'media' that contains an img with a class of 'img-70' and an alt attribute of '' and a div with a
 * class of 'media-body' that contains a h6 that contains the text 'Olive Yew' and a p that contains
 * the text 'Sep 13, 2022' and a p with a class of 'mb-0' that contains the text 'The location, view
 * from the rooms are just awesome. Very cool landscaping has been done Around the hotel. There are
 * small activities that you can indulge with your family.' and a div with a class of '
 * @returns The return value of the function is the value of the last expression in the function body.
 */
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import ReviewStarr from "../../elements/ReviewStarr";

const ReviewsDeskBox = ({id}) => {
  const router = useRouter();
  console.log(id);
  return (
    <div className='desc-box'>
      <div className='page-section'>
        <h4 className='content-title'>Bình luận</h4>
        <div className='review'>
          <div className='review-box'>
            <div className='media'>
              <img src='/assets/images/avatar/3.jpg' className='img-70' alt='' />
              <div className='media-body'>
                <h6>Trang Hạnh</h6>
                <p>28/07/2023</p>
                <p className='mb-0'>
                Ngôi nhà có diện tích rộng rãi và thiết kế đơn giản nhưng tinh tế, tạo cảm giác thoải mái và dễ chịu. Phòng khách được bài trí rộng rãi với nội thất hiện đại và không gian mở, đem lại không gian sống tuyệt vời cho gia đình chúng tôi. Phòng ngủ rộng rãi với ánh sáng tự nhiên và giường thoải mái, giúp tôi có giấc ngủ ngon lành hơn.
                </p>
              </div>
              <div className='rating'>
                <ReviewStarr rating={3} />
              </div>
            </div>
          </div>
          <div className='review-box review-child'>
            <div className='media'>
              <img src='/assets/images/avatar/4.jpg' className='img-70' alt='' />
              <div className='media-body'>
                <h6>Quang Minh</h6>
                <p>20/08/2023</p>
                <p className='mb-0'>Tôi đã thuê ngôi nhà này trong một thời gian và có một số nhận xét về nó. Đầu tiên, vị trí của ngôi nhà rất thuận tiện, nằm trong khu vực an ninh, gần trung tâm thành phố và các tiện ích hàng ngày. Điều này giúp tôi tiết kiệm thời gian di chuyển và tiện lợi trong việc mua sắm hay đến các quán ăn, cửa hàng.</p>
              </div>
              <div className='rating'>
                <ReviewStarr rating={5} />
              </div>
            </div>
          </div>
          <div className='review-box'>
            <div className='media'>
              <img src='/assets/images/avatar/2.jpg' className='img-70' alt='' />
              <div className='media-body'>
                <h6>Thu Hương</h6>
                <p>23/08/2023</p>
                <p className='mb-0'>
                  {" "}
                  Ngôi nhà cho thuê này thực sự là một điểm đến ấm cúng, chúng tôi đã tận hưởng những khoảnh khắc hạnh phúc và thoải mái tại đây. Vị trí đắc địa của nó là một lợi thế lớn, vì chúng tôi có thể dễ dàng tiếp cận đến trung tâm thành phố, các cửa hàng và các dịch vụ hàng ngày.
                </p>
              </div>
              <div className='rating'>
                <ReviewStarr rating={4} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h4 className='content-title'>Viết bình luận</h4>
        <form className='review-form'>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Tên' required />
          </div>
          <div className='form-group'>
            <textarea className='form-control' placeholder='Bình luận'></textarea>
          </div>
          <Link className='btn btn-gradient btn-pill' href={`/property/image-slider?id=${id}`}>Gửi</Link>
        </form>
      </div>
    </div>
  );
};

export default ReviewsDeskBox;
