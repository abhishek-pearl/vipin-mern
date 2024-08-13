import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const TestimonialsSlider = () => {
  return (
    <section className="py-12 space-y-10 mb-10">
      <div className="flex justify-center">
        <div className=" w-fit text-3xl font-semibold shadow-[0_3px#ff0000]">
          Testimonials
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          className="mySwiper"
        >
          {Array.from({ length: 5 }).map((item) => {
            return (
              <SwiperSlide>
                <div className="max-w-3xl mx-auto">
                  <figure>
                    <blockquote>
                      <p className="text-gray-800 text-lg text-center font-base sm:text-xl">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nunc et est hendrerit, porta nunc vitae, gravida
                        justo. Nunc fermentum magna lorem, euismod volutpat arcu
                        volutpat et.“
                      </p>
                    </blockquote>
                    <div className="flex justify-center items-center gap-x-4 mt-6">
                      <img
                        src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                        className="w-16 h-16 rounded-full"
                        alt="Testimonial"
                      />
                      <div>
                        <span className="block text-gray-800 font-semibold">
                          Martin Escobar
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          Founder of Meta
                        </span>
                      </div>
                    </div>
                  </figure>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
