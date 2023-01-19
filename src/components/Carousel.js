import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const colorOptions = {
  white: {
    src1: require("../assets/ModelS1.jpg"),
    src2: require("../assets/ModelS2.jpg"),
    src3: require("../assets/ModelS3.jpg"),
  },
  black: {
    src1: require("../assets/ModelS1_black.jpg"),
    src2: require("../assets/ModelS2_black.jpg"),
    src3: require("../assets/ModelS3_black.jpg"),
  },
  grey: {
    src1: require("../assets/ModelS1_grey.jpg"),
    src2: require("../assets/ModelS2_grey.jpg"),
    src3: require("../assets/ModelS3_grey.jpg"),
  },
  blue: {
    src1: require("../assets/ModelS1_blue.jpg"),
    src2: require("../assets/ModelS2_blue.jpg"),
    src3: require("../assets/ModelS3_blue.jpg"),
  },
  red: {
    src1: require("../assets/ModelS1_red.jpg"),
    src2: require("../assets/ModelS2_red.jpg"),
    src3: require("../assets/ModelS3_red.jpg"),
  },
};

const Carousel = (props) => {
  const { color } = props;
  return (
    <div className="swiper-container">
      <Swiper navigation={true} modules={[Navigation]} className="">
        <SwiperSlide>
          <div>
            <img className="" src={colorOptions[color].src1} alt="test"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="" src={colorOptions[color].src2} alt="test"></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img className="" src={colorOptions[color].src3} alt="test"></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
