import React from 'react';
import featureImg1 from '@/public/images/features/feature-img-1.png';
import featureImg2 from '@/public/images/features/feature-img-2.png';
import featureIcon1 from '@/public/images/icons/feature-icon-1.svg';
import featureIcon2 from '@/public/images/icons/feature-icon-2.svg';
import featureIcon3 from '@/public/images/icons/feature-icon-3.svg';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';

const Features = () => {
  return (
    <section className="ep-features-section overflow-hidden pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="feature-image position-relative">
              <div className="img-one overflow-hidden rounded-20 reveal left position-relative">
                <Image src={featureImg1} alt="about-img"
                  className="img-fluid w-100 rounded-20" />
              </div>
              <div className="img-two overflow-hidden position-absolute">
                <Image src={featureImg2} alt="about-img"
                  className="img-fluid w-100 rounded-20" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-text">
              <SectionTitle subTitle="Our features" title="Connecting the Dots of Innovation" />
              <div
                data-aos-duration="800"
                data-aos="fade-up"
                className="feature-item d-flex align-items-center">
                <div
                  className="icon-box rounded-20 icon-box-primary d-flex justify-content-center align-items-center">
                  <Image src={featureIcon1} alt="feature-icon" />
                </div>
                <div className="info">
                  <h4 className="feature-title">Tech Vista Solutions</h4>
                  <p>Our mission is there are many variations of passages Lorem Ipsum available</p>
                </div>
              </div>
              <div
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="100"
                className="feature-item d-flex align-items-center">
                <div className="icon-box rounded-20 icon-box-secondary d-flex justify-content-center align-items-center">
                  <Image src={featureIcon2} alt="feature-icon" />
                </div>
                <div className="info">
                  <h4 className="feature-title">Pro Guard IT Services</h4>
                  <p>Our mission is there are many variations of passages Lorem Ipsum available</p>
                </div>
              </div>
              <div
                data-aos-duration="800"
                data-aos="fade-up"
                data-aos-delay="200"
                className="feature-item d-flex align-items-center">
                <div className="icon-box rounded-20 icon-box-tertiary d-flex justify-content-center align-items-center">
                  <Image src={featureIcon3} alt="feature-icon" />
                </div>
                <div className="info">
                  <h4 className="feature-title">Cyber Shield Experts</h4>
                  <p>Our mission is there are many variations of passages Lorem Ipsum available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
