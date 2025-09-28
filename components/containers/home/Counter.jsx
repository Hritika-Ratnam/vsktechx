import counterImg from '@/public/images/img/counter-image.png';
import OdometerCounter from '../Odometer';
import Image from 'next/image';

const Counter = () => {
  return (
    <section className="ep-counter-section pt-120 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2
              className="heading-style1 mb-40 title-anim">
              Your Software is in Trusted Hands
            </h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="counter-text">
              {/* <p>
                The IT industry offers diverse career opportunities, from
                network administration to software development. As technology
                continues to evolve, the importance of IT in shaping the future
                of businesses.
              </p> */}
              <div className="counter-wrapper">
                <div className="row g-4">
                  <div
                    data-aos-duration="800"
                    data-aos="fade-up"
                    className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={15}years /> +
                      </div>
                      <span className="short-info"> Software Development</span>
                    </div>
                  </div>
                  <div
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={500} /> +
                      </div>
                      <span className="short-info">Projects Completed</span>
                    </div>
                  </div>
                  <div
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={20} /> +
                      </div>
                      <span className="short-info">Hire Resources</span>
                    </div>
                  </div>
                  {/* <div
                    data-aos-duration="800"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="col-sm-6">
                    <div className="counter-item text-center rounded-20">
                      <div className="number">
                        <OdometerCounter value={250} /> +
                      </div>
                      <span className="short-info">Clients Comment</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="counter-image rounded-20 overflow-hidden ms-lg-auto">
              <div className="reveal left">
                <Image src={counterImg} alt="Counter Section" className="img-fluid w-100 parallax-image" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Counter;
