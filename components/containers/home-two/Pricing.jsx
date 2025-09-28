{/*import { pricingPlans } from "@/data/pricing"
import SectionTitle from "../SectionTitle"
import Link from "next/link"
import Image from "next/image"

const Pricing = ({ extraClassName = '' }) => {
  return (
    <section className={`ep-pricing-section pt-120 ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <SectionTitle subTitle="Pricing plan" title="Connecting the Dots of Digital Innovation" extraClass="text-center" />
          </div>
        </div>
        <div className="row">
          {pricingPlans.map((plan) => (
            <div
              data-aos-duration="600"
              data-aos="fade-up"
              key={plan.id} className="col-lg-4 col-md-6 mx-auto mx-lg-0">
              <div className="pricing-item rounded-30">
                <div className="price-header d-flex justify-content-between">
                  <div className="price-box">
                    <h3 className="title">{plan.title}</h3>
                    <h2 className="price">{plan.price}</h2>
                  </div>
                  <div className="icon-box rounded-20 d-flex align-items-center justify-content-center">
                    <Image src={plan.icon} alt="pricing-icon" />
                  </div>
                </div>
                <ul className="list-unstyled mt-40 options">
                  {plan.features.map((feature, i) => (
                    <li key={`${plan.id}-${i}`} className="d-flex">
                      <i className="fa-solid fa-angles-right"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="theme-btn mt-40 w-100 theme-btn-border position-relative d-inline-flex justify-content-center align-items-center"
                >
                  Get Now
                  <span className="arrow">
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1.25 11C1.00391 11 0.785156 10.918 0.621094 10.7539C0.265625 10.4258 0.265625 9.85156 0.621094 9.52344L4.36719 5.75L0.621094 2.00391C0.265625 1.67578 0.265625 1.10156 0.621094 0.773437C0.949219 0.417969 1.52344 0.417969 1.85156 0.773437L6.22656 5.14844C6.58203 5.47656 6.58203 6.05078 6.22656 6.37891L1.85156 10.7539C1.6875 10.918 1.46875 11 1.25 11Z"
                        fill="#020842"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing
*/}