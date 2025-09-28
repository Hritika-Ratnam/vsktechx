"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SectionTitle from "../SectionTitle";
import { testimonials } from "@/data/testmonial";
import Image from "next/image";

const Testimonialstyle = `
.testimonial-card {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.testimonial-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.call-us-btn .icon {
  background-color: #09b850 !important;
  border-radius: 50% !important;
  width: 60px !important;
  height: 60px !important;
  animation: phoneBlink 1.5s infinite ease-in-out !important;
}

@keyframes phoneBlink {
  0% { 
    background-color: #09b850;
    opacity: 1;
  }
  50% { 
    background-color: #0db356;
    opacity: 0.7;
  }
  100% { 
    background-color: #09b850;
    opacity: 1;
  }
}

.call-us-btn .icon i {
  color: white !important;
  font-size: 20px !important;
}
`;

const Testimonial = () => {
  return (
    <>
      <style jsx global>{Testimonialstyle}</style>
      <section className="ep-testimonial-section pt-120 bg-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="testimonial-info">
                <SectionTitle
                  subTitle="Clients Testimonials"
                  title="Elevating Business with IT Excellence"
                  extraClass="mb-20"
                />
                <div className="short-info">
                  <p>
                    Maintenance, ensuring that systems run smoothly and
                    efficiently. Information Technology is a field that
                    encompasses the development and use of computer systems.
                  </p>
                </div>
                <div className="call-us">
                  <a
                    href="tel:(+91)72660-06663"
                    className="call-us-btn style2 d-flex align-items-center gap-3"
                  >
                    <span className="icon d-flex justify-content-center align-items-center">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    <div className="info">
                      <span className="title text-uppercase">
                        CALL US ANYTIME
                      </span>
                      <h4 className="number">(+91) 72660-06663</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-area testimonial-slider rounded-30">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  speed={1000}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  navigation={false}
                  modules={[Autoplay, Navigation]}
                  className="swiper-container"
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="testimonial-card testimonial-item d-flex flex-column">
                        <div className="rating">
                          {[...Array(5)].map((_, index) => (
                            <i
                              key={index}
                              className={`fas fa-star ${
                                index >= testimonial.rating ? "no-rate" : ""
                              }`}
                            ></i>
                          ))}
                        </div>
                        <div className="details">
                          <p>{testimonial.text}</p>
                        </div>
                        <div className="user-info d-flex align-items-center justify-content-between gap-4">
                          <div className="user d-flex align-items-center">
                            {testimonial.img && (
                              <div className="img overflow-hidden rounded-pill flex-shrink-0">
                                <Image
                                  src={testimonial.img}
                                  alt={testimonial.name}
                                  className="w-100 h-100 object-fit-cover"
                                />
                              </div>
                            )}
                            <div className="text">
                              <h4 className="name">{testimonial.name}</h4>
                              <p className="designation">
                                {testimonial.designation}
                              </p>
                            </div>
                          </div>
                          {testimonial.quoteIcon && (
                            <div className="quote">
                              <Image
                                src={testimonial.quoteIcon}
                                alt="quote-icon"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
