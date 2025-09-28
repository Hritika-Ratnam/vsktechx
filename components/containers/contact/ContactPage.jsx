"use client";
import SimpleReactValidator from 'simple-react-validator';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';

const ContactPage = () => {
  const [forms, setForms] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const [validator] = useState(
    new SimpleReactValidator({ className: 'errorMessage' })
  );

  const [, forceUpdate] = useState(); // to re-render for validation messages

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();

      toast.success("Form submitted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setForms({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
    } else {
      validator.showMessages();
      forceUpdate(1); // force re-render
    }
  };

  return (
    <>
      <section className="ep-contact-section pt-120">
        <div className="container">
          <div className="contact-form position-relative section-bg">
            <h2 className="title text-center">
              Get In Touch to hire IT Services India Developers
            </h2>
            <p style={{ fontSize: '1.15rem', textAlign: 'center', marginTop: '-10px', marginBottom: '20px', color: '#555' }}>
              Reach out to us today, and we’ll help you create groundbreaking software that turns challenges into opportunities.
            </p>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <a href="/contact/get-in-touch" className="theme-btn theme-btn-border d-inline-block">
                Get In Touch
              </a>
            </div>

            {/* <form onSubmit={submitHandler}>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="input-group">
                    <input
                      required
                      type="text"
                      name="name"
                      value={forms.name}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                      placeholder="Your Name"
                    />
                    {validator.message('name', forms.name, 'required|alpha_space')}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-group">
                    <input
                      required
                      type="email"
                      name="email"
                      value={forms.email}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                      placeholder="Your Email"
                    />
                    {validator.message('email', forms.email, 'required|email')}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-group">
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={forms.phone}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                      placeholder="Your Phone"
                    />
                    {validator.message('phone', forms.phone, 'required|phone')}
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="input-group">
                    <select
                      name="subject"
                      value={forms.subject}
                      onChange={changeHandler}
                      className="form-control form-field shadow-none"
                    >
                      <option value="" disabled>Subject</option>
                      <option value="Support">Support</option>
                      <option value="Sales">Sales</option>
                      <option value="General">General</option>
                    </select>
                    {validator.message('subject', forms.subject, 'required')}
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="input-group">
                    <textarea
                      name="message"
                      value={forms.message}
                      onChange={changeHandler}
                      className="form-field textarea-control"
                      placeholder="Message here.."
                    ></textarea>
                    {validator.message('message', forms.message, 'required')}
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="text-center">
                    <button type="submit" className="theme-btn position-relative">
                      Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  );
};

export default ContactPage;
