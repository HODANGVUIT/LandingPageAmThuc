import React from "react";
import ProfilePic from "../Assets/hodangvu-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <section id="evaluate">
      {/* Nội dung của đánh giá */}
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Đánh giá</p>
        <h1 className="primary-heading">Lời Đánh Giá</h1>
        <p className="primary-text">
        việc đánh giá không chỉ là việc liệt kê những điểm tốt và xấu mà còn là cơ hội để học hỏi và cải tiến. 
        Một đánh giá toàn diện và chi tiết sẽ giúp xác định rõ những điểm cần duy trì và những khía cạnh cần điều chỉnh, từ đó mang lại sự phát triển bền vững và hiệu quả.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Món ăn tại đây thực sự ấn tượng với chất lượng nguyên liệu tuyệt vời và hương vị đậm đà. Cách trình bày đẹp mắt và phục vụ chuyên nghiệp đã làm cho buổi ăn trở thành một trải nghiệm đáng nhớ. 
        Không gian ấm cúng và dịch vụ nhiệt tình làm tăng thêm sự hài lòng của khách hàng.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>HO DANG VU</h2>
      </div>
    </div>
    </section>
  );
};

export default Testimonial;