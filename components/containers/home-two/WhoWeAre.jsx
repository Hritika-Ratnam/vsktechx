import IconPhone from '@/public/images/icons/icon-headphone.svg';
import WhoImg from '@/public/images/img/who-we-are.png';
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import OdometerCounter from '../Odometer';
const WhoWeAre = () => {

  return (
    <section className="ep-who-we-area-section pt-120">
      <div className="container">
        <div className="row">
          <div
            data-aos-duration="600"
            data-aos="fade-left"
            className="col-xl-5 align-self-center">
            <div className="short-info text-center text-md-start">
              <SectionTitle title="Craft Tomorrow Digital World" extraClass="mb-20 text-center text-md-start" />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra, yhe a nostra mattis
                hendrerit proin mollis pretium</p>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit platea pharetra, yhe a nostra mattis
                hendrerit proin mollis pretium Lorem ipsum dolor sit amet consectetur adipiscing elit platea
                pharetra, yhe a nostra mattis hendrerit proin mollis pretium</p>
            </div>
          </div>
          <div
            className="col-xl-7">
            <div
              className="image d-sm-flex justify-content-end">
              <div
                data-aos-duration="600"
                data-aos="fade-left"
                data-aos-delay="300"
                className="counter flex-shrink-0 text-center flex-grow-1 d-flex flex-column justify-content-center">
                <div
                  className="icon-box rounded-pill d-flex justify-content-center align-items-center icon-box-primary mx-auto">
                  <Image src={IconPhone} alt="icon-headphone" />
                </div>
                <div className="count d-flex align-items-center justify-content-center">
                  <OdometerCounter value={25} />+
                </div>
                <h5 className="title">Services We Provide</h5>
              </div>
              <div className="img overflow-hidden reveal left">
                <Image src={WhoImg} alt="who-we-are" className="img-fluid w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
