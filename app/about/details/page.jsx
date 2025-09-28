
import Footer from "@/components/layout/footer/Footer";
import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import aboutImg from "@/public/images/about-us/about-img.png";
import aboutShape from "@/public/images/about-us/about-shape.svg";

import SectionTitle from "@/components/containers/SectionTitle";

import Header from "@/components/layout/header/Header"
const AboutDetails = () => {
  const breadcrumbs = [
    { label: '', link: '/' },
    { label: '', link: '/about' },
    { label: '', link: null }
  ];
  return (
    <>
      <Header/>
      <PageHeader title="" breadcrumbs={breadcrumbs}/>
      <section className="ep-about-section pt-120 style2">
        <div className="container">
          <div className="row">
            <div
              data-aos-duration="600"
              data-aos="fade-left"
              className="col-xl-6 col-lg-7 col-md-10 mx-auto">
              <div className="about-image position-relative">
                <Image src={aboutImg} alt="about-img" className="img-fluid w-100" />
                {/* <Image src={aboutShape} alt="about-shape" className="about-shape position-absolute" /> */}
              </div>
            </div>
            <div
              data-aos-duration="600"
              data-aos="fade-left"
              data-aos-delay="300"
              className="col-xl-6 col-lg-9 mx-auto">
              <div className="about-text">
                <SectionTitle subTitle="about us" title="We Love What We Do" extraClass="mb-20" />
                <div style={{ fontSize: '1.1rem', lineHeight: '2', marginBottom: '2rem' }}>
                  <p style={{ marginBottom: '1.5rem' }}>
                    <strong>Welcome to VSK TechX</strong>, a subsidiary of Kripalu Innovations Pvt. Ltd., where we serve as your gateway to cutting-edge digital solutions! At VSK TechX, we pride ourselves on being the architects of your digital success story, offering a comprehensive suite of services that redefine excellence.
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Embark on a journey of innovation with our <strong>Mobile App and Website Development</strong> services. Whether it's crafting intuitive iPhone Apps (iOS), dynamic Android Apps, captivating Gaming Apps, robust Finance Apps, seamless E-Commerce Apps, engaging Entertainment Apps, or transformative Education Apps—we bring your ideas to life. Our expertise also extends to Games Web, E-Commerce Web, Business Web, and Portfolio Web, ensuring your digital presence truly stands out.
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    In the vast digital landscape, we propel your brand to new heights. Our <strong>Digital Marketing</strong> services cover the entire spectrum—from SEO strategies that boost visibility to Social Media Marketing and Management that captivate your audience. We specialize in Content Marketing, Advertising, Pay-Per-Click (PPC) campaigns, Media Buying & Planning, Branding, Creative Solutions, Market Research, Digital Strategy, Explainer Videos, Commercials, Corporate Videos, and Social Media Growth.
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Your brand is not just a name—it’s an experience, and we ensure it leaves a lasting impression. At VSK TechX, we don’t just deliver projects; we craft experiences. Our team of skilled professionals is dedicated to transforming your vision into reality, ensuring every line of code, design element, and marketing strategy aligns with your goals.
                  </p>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Join us in the pursuit of digital excellence—where your success is our priority, and innovation knows no bounds. <strong>Welcome to VSK TechX</strong>—where ideas evolve, and possibilities thrive. Let’s shape the future together!
                  </p>
                </div>
                <div className="list-box mt-30">
                  <div className="row">
                    <div className="col-sm-6 list-wrapper">
                      <ul className="list-unstyled list-info">
                        <li>
                          <i className="fa-solid fa-circle-check"></i> Software Development
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i> Application Development
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i> Cloud Application
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i> Digital Marketing
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 list-wrapper">
                      <ul className="list-unstyled list-info">
                        <li>
                          <i className="fa-solid fa-circle-check"></i> Full Stack Development
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i> Artificial Intelligence
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i> UX/UI Design
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i> Mobile App Development
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default AboutDetails;
