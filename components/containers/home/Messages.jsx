import React from 'react'
import messageImg from '@/public/images/img/message-img.png';
import SectionTitle from '../SectionTitle';
import Image from 'next/image';

const Messages = () => {
  return (
    <section className="ep-messages-section position-relative pt-120 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="message-text position-relative">
              <SectionTitle subTitle="Let's Talk" title="Shaping the Future with Technology" extraClass="mb-40" />
              <form action="#" className="message-form">
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="input-group">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control form-field shadow-none" placeholder="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <label className="form-label">E-mail</label>
                      <input type="text" className="form-control form-field shadow-none"
                        placeholder="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <label className="form-label">Phone</label>
                      <input type="text" className="form-control form-field shadow-none" placeholder="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-group">
                      <label className="form-label">Country</label>
                      {/* <select className="form-select form-field shadow-none" aria-label="Default select example">
                        <option>New York City</option>
                        <option>Los Angeles</option>
                        <option>Chicago</option>
                        <option>Houston</option>
                      </select> */}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="input-group">
                      <label className="form-label">Company</label>
                      <textarea className="form-field textarea-control" placeholder=""></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="theme-btn position-relative">Send Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="col-lg-6">
            <div className="message-image overflow-hidden reveal zoom-out position-absolute bottom-0 end-0">
              <Image src={messageImg} alt="message-image" className="img-fluid w-100" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Messages
