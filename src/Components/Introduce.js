import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="introduce">
      {/* Nội dung của giới thiệu */}
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Giới Thiệu</p>
        <h1 className="primary-heading">
          Thực phẩm là một phần quan trọng của chế độ ăn uống cân bằng
        </h1>
        <p className="primary-text">
        Thực phẩm không chỉ là nguồn cung cấp năng lượng cần thiết cho cơ thể 
        hoạt động hàng ngày mà còn đóng vai trò quan trọng trong việc duy trì sức khỏe tổng thể và ngăn ngừa các bệnh tật.
        </p>
        <p className="primary-text">
        Một chế độ ăn uống cân bằng, bao gồm đầy đủ các nhóm thực phẩm, sẽ giúp chúng ta sống khỏe mạnh và năng động.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Tìm Hiểu Thêm</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Xem Video
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;