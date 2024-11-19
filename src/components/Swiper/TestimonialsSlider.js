import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      quote:
        "The home loan process was smooth and hassle-free. I was able to buy my dream home with ease, thanks to their excellent customer service.",
      name: "Sarah Johnson",
      position: "Homeowner",
      image: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
    },
    {
      quote:
        "The personal loan helped me cover medical expenses when I needed it the most. The approval process was quick, and I highly recommend them.",
      name: "David Williams",
      position: "Freelancer",
      image: "https://api.uifaces.co/our-content/donated/bUkmHPKs.jpg",
    },
    {
      quote:
        "I couldn’t be happier with my new car! Their car loan option gave me great flexibility with repayments, making my dream come true.",
      name: "Emily Davis",
      position: "Marketing Manager",
      image: "https://api.uifaces.co/our-content/donated/n4Ngwvi7.jpg",
    },
    {
      quote:
        "This business loan gave me the capital boost I needed to expand my company. The terms were straightforward, and I could start focusing on growth.",
      name: "Michael Brown",
      position: "CEO, BrownTech",
      image: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
    },
    {
      quote:
        "The loan against my property provided me with the funds I needed without any unnecessary complications. The interest rate was highly competitive too.",
      name: "Jennifer Lee",
      position: "Small Business Owner",
      image: "https://api.uifaces.co/our-content/donated/bUkmHPKs.jpg",
    },
    {
      quote:
        "ODCC helped manage my cash flow efficiently. The flexibility it provides made a huge difference in my business's financial health.",
      name: "Robert Miller",
      position: "Entrepreneur",
      image: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
    },
    {
      quote:
        "I managed to get a fantastic deal through the auction properties platform. The whole process was transparent and easy to follow.",
      name: "Jessica Turner",
      position: "Real Estate Investor",
      image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    },
  ];

  return (
    <section className="py-12 space-y-10 mb-10">
      <div className="flex justify-center">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          className="mySwiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                <figure>
                  <blockquote>
                    <p className="text-gray-800 text-lg text-center font-medium sm:text-xl">
                      “{item.quote}“
                    </p>
                  </blockquote>
                  <div className="flex justify-center items-center gap-x-4 mt-6">
                    <img
                      src={item.image}
                      className="w-16 h-16 rounded-full"
                      alt={item.name}
                    />
                    <div>
                      <span className="block text-gray-800 font-semibold text-center">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5 text-center">
                        {item.position}
                      </span>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
