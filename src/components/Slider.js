// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

export default function Slider() {
  return (
    <div className="swiper-check" id="Here">
      <h1>PORTFOLIO</h1>
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 700,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="images/3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/2.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
