// "use client"
// import React, { useEffect, useRef } from 'react';
// import "swiper/swiper-bundle.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import SectionTitle from '../SectionTitle';
// import { services } from '@/data/services';
// import Link from 'next/link';
// import Image from 'next/image';

// const Services = ({ isSlider = true, showTitle = true, extraClassName='', showHeading = false }) => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (isSlider && swiperRef.current) {
//       swiperRef.current.swiper.params.navigation.prevEl = ".arrow-prev";
//       swiperRef.current.swiper.params.navigation.nextEl = ".arrow-next";
//       swiperRef.current.swiper.navigation.init();
//       swiperRef.current.swiper.navigation.update();
//     }
//   }, [isSlider]);

//   return (
//     <section className={`ep-services-section py-120 ${extraClassName}`}>
//       <div className="container">
//         {showHeading && <h2 className="text-center mb-4">Our Services</h2>}
//         <div className="position-relative">
//           {/* Conditionally render the SectionTitle only when showTitle is true */}
//           {showTitle && (
//             <div className="row mb-60">
//               <div className="col-xl-6 col-md-9">
//                 <SectionTitle subTitle="Our Services" title="Digital Strategy with Conversion Optimization" extraClass="mb-0" />
//               </div>
//               {isSlider && (
//                 <div className="col-xl-6 col-md-3 align-self-end">
//                   <div className="services-arrow d-flex gap-4 align-items-center justify-content-center justify-content-sm-start justify-content-md-end">
//                     <div className="arrow arrow-prev">
//                       <i className="fa-solid fa-arrow-left"></i>
//                     </div>
//                     <div className="arrow arrow-next">
//                       <i className="fa-solid fa-arrow-right"></i>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//         </div>

//         {/* Render the Swiper or non-slider layout */}
//         {isSlider ? (
//           <Swiper
//             ref={swiperRef}
//             spaceBetween={30}
//             slidesPerView={3}
//             loop={true}
//             speed={1000}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             navigation={{ prevEl: ".arrow-prev", nextEl: ".arrow-next" }}
//             modules={[Autoplay, Navigation]}
//             breakpoints={{
//               320: { slidesPerView: 1, spaceBetween: 10 },
//               576: { slidesPerView: 2, spaceBetween: 20 },
//               768: { slidesPerView: 2, spaceBetween: 25 },
//               1024: { slidesPerView: 3, spaceBetween: 30 },
//             }}
//           >
//             {services.map((service) => (
//               <SwiperSlide key={service.id}>
//                 <div className="service-item rounded-20">
//                   <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`} className="d-block w-100" target="_blank" rel="noopener noreferrer">
//                     <div className={`icon-box rounded-20 ${service.className} d-flex justify-content-center align-items-center`}>
//                       <Image src={service.icon} alt="service-icon" />
//                     </div>
//                     <div className="text">
//                       <h4 className="service-title">{service.title}</h4>
//                       <p>{service.description}</p>
//                     </div>
//                   </Link>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         ) : (
//           <div className="row">
//             {services.map((service) => (
//               <div key={service.id} className="col-lg-4 col-md-6">
//                 <div className="service-item rounded-20">
//                   <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`} className="d-block w-100" target="_blank" rel="noopener noreferrer">
//                     {/* Override className only for non-slider view */}
//                     <div className="icon-box rounded-20 icon-box-tertiary d-flex justify-content-center align-items-center">
//                       <Image src={service.icon} alt="service-icon" />
//                     </div>
//                     <div className="text">
//                       <h4 className="service-title">{service.title}</h4>
//                       <p>{service.description}</p>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Services
"use client";
import React, { useEffect, useRef, useState } from 'react';
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SectionTitle from '../SectionTitle';
import { services } from '@/data/services';
import Link from 'next/link';
import Image from 'next/image';

const Services = ({ isSlider = true, showTitle = true, extraClassName='', showHeading = false, showDropdown = true, selectedCategory = null }) => {
  const swiperRef = useRef(null);
  const [selectedService, setSelectedService] = useState(selectedCategory || "");

  useEffect(() => {
    if (isSlider && swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = ".arrow-prev";
      swiperRef.current.swiper.params.navigation.nextEl = ".arrow-next";
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, [isSlider]);

  // Update selectedService when selectedCategory prop changes
  useEffect(() => {
    if (selectedCategory) {
      setSelectedService(selectedCategory);
    }
  }, [selectedCategory]);

  // Filter services based on dropdown selection
  const filteredServices = selectedService
    ? services.filter(service => service.title === selectedService)
    : services;

  return (
    <section className={`ep-services-section py-120 ${extraClassName}`}>
      <div className="container">
        {showHeading && <h2 className="text-center mb-4">Our Services</h2>}
        {showHeading && <p className="text-center mb-5" style={{color: '#49515B', fontSize: '18px', fontWeight: '400', letterSpacing: '0.5px'}}>Select from our range of services to find the perfect solution</p>}

        {/* Dropdown for service selection */}
        {showDropdown && (
          <div className="mb-4 text-center">
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="p-2 border rounded-20"
            >
              <option value="">All Services</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="position-relative">
          {showTitle && (
            <div className="row mb-60">
              <div className="col-xl-6 col-md-9">
                <SectionTitle subTitle="Our Services" title="Digital Strategy with Conversion Optimization" extraClass="mb-0" />
              </div>
              {isSlider && !selectedService && (
                <div className="col-xl-6 col-md-3 align-self-end">
                  <div className="services-arrow d-flex gap-4 align-items-center justify-content-center justify-content-sm-start justify-content-md-end">
                    <div className="arrow arrow-prev">
                      <i className="fa-solid fa-arrow-left"></i>
                    </div>
                    <div className="arrow arrow-next">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Render Swiper only if no filter is applied */}
        {!selectedService && isSlider ? (
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            speed={1000}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{ prevEl: ".arrow-prev", nextEl: ".arrow-next" }}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {filteredServices.map((service) => (
              <SwiperSlide key={service.id}>
                <div className="service-item rounded-20">
                  <div className={`icon-box rounded-20 ${service.className} d-flex justify-content-center align-items-center`}>
                      <Image src={service.icon} alt="service-icon" />
                    </div>
                    <div className="text">
                      <h4 className="service-title">{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            {/* Show subcategories if a specific service is selected */}
            {selectedService && filteredServices.length === 1 ? (
              <div className="selected-service-details">
                <div className="row mb-5">
                  <div className="col-12 text-center">
                    <h3 className="mb-4">{filteredServices[0].title} Services</h3>
                    <p className="lead mb-5">{filteredServices[0].description}</p>
                  </div>
                </div>
                <div className="row">
                  {filteredServices[0].subcategories?.map((subcategory, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                      <div className="subcategory-item p-4 border rounded-20 h-100 text-center">
                        <div className="subcategory-icon mb-3">
                          <i className="fas fa-check-circle text-primary" style={{ fontSize: '2rem', color: '#47B16A' }}></i>
                        </div>
                        <h5 className="subcategory-title mb-2">{subcategory}</h5>
                        <p className="text-muted small">Expert solutions tailored to your needs</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Show all services in grid layout - 2x2 format */
              <div className="row">
                {filteredServices.map((service, index) => (
                  <div 
                    key={service.id} 
                    className="col-lg-6 col-md-6 mb-4"
                  >
                    <div className="service-item rounded-20">
                      <div className="icon-box rounded-20 icon-box-tertiary d-flex justify-content-center align-items-center">
                          <Image src={service.icon} alt="service-icon" />
                        </div>
                        <div className="text">
                          <h4 className="service-title">{service.title}</h4>
                          <p>{service.description}</p>
                        </div>
                     
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Services;
