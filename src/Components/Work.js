import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Chọn Bữa Ăn",
      text: "Hãy chọn một bữa ăn phù hợp với cơ thể,sở thích, chế độ ăn uống, sức khoẻ, ngân sách ",
    },
    {
      image: ChooseMeals,
      title: "Đặt Hàng",
      text: "Hãy đặt hàng những món bạn muốn , đặt địa chỉ và số điện thoại đúng để nhận hàng ",
    },
    {
      image: DeliveryMeals,
      title: "Giao Hàng Nhanh",
      text: "Giao hàng miễn phí, giao hàng tận nhà, tiện lợi ",
    },
  ];
  return (
      <section id="work">
        {/* Nội dung của công việc */}
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Công Việc</p>
        <h1 className="primary-heading">Làm sao nó hoạt động</h1>
        <p className="primary-text">
          Xác định mục tiêu,cần xác định rõ ràng mục tiêu của công việc. Lập kế hoạch, lập kế hoạch chi tiết cho từng bước trong quy trình.
          Thực hiện, Thực hiện các nhiệm vụ theo kế hoạch đã đề ra. Đánh giá. Cải tiến liên tục, Dựa trên kết quả đánh giá, thực hiện các cải tiến liên tục để nâng cao hiệu suất và hiệu quả công việc.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Work;