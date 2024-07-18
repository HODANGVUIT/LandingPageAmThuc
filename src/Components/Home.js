import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Header";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    
    <section id="home">
    {/* Nội dung của trang chủ */}
    <div className="home-container">
      
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Món ăn yêu thích của bạn được giao nóng và tươi
          </h1>
          <p className="primary-text">
          Những đầu bếp hàng đầu sẽ làm tất cả các công đoạn chuẩn bị, 
          như thái nhỏ và ướp, để bạn có thể nấu một món ăn tươi ngon.
          </p>
          <button className="secondary-button">
            Đặt Hàng Ngay <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Home;