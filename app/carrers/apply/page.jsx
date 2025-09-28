"use client";
import React, { useState } from "react";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const degreeOptions = [
  { value: "bachelors", label: "Bachelors" },
  { value: "postgraduates", label: "Post Graduates" },
  { value: "others", label: "Others" },
];

const experienceOptions = Array.from({ length: 11 }, (_, i) => ({
  value: i,
  label: `${i} year${i === 1 ? '' : 's'}`,
}));

const ApplyPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    degree: "bachelors",
    role: "",
    currentCtc: "",
    expectedCtc: "",
    noticePeriod: "",
    experience: 0,
    resume: null,
    receiveInfo: false,
    wantNDA: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("https://backend-vsktechx.onrender.com/api/apply", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div
        className="container-fluid"
        style={{
          marginTop: "80px",
          background: "#f7f7f7",
          minHeight: "100vh",
          padding: "40px 0",
        }}
      >
        {/* Apply Now Text */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
            fontWeight: 600,
            fontSize: "4.8rem",
          }}
        >
          Apply Now
        </div>

        {/* Form Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "56px",
          }}
        >
          <div
            style={{
              flex: 2,
              maxWidth: 600,
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              padding: "40px 32px",
            }}
          >
            {submitted ? (
              <div className="alert alert-success text-center">
                Thank you for applying! We will get back to you soon.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="p-0 border-0 rounded-0 bg-transparent shadow-none"
              >
                {/* Input Fields */}
                <div className="mb-3">
                  <label className="form-label">Name <span style={{ color: '#47B16A' }}>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email ID <span style={{ color: '#47B16A' }}>*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number <span style={{ color: '#47B16A' }}>*</span></label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">College Name <span style={{ color: '#47B16A' }}>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="college"
                    value={form.college}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Degree <span style={{ color: '#47B16A' }}>*</span></label>
                  <select
                    className="form-select"
                    name="degree"
                    value={form.degree}
                    onChange={handleChange}
                    required
                  >
                    {degreeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Role Applying For <span style={{ color: '#47B16A' }}>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Current CTC <span style={{ color: '#47B16A' }}>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="currentCtc"
                    value={form.currentCtc}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Expected CTC <span style={{ color: '#47B16A' }}>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="expectedCtc"
                    value={form.expectedCtc}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Notice Period <span style={{ color: '#47B16A' }}>*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    name="noticePeriod"
                    value={form.noticePeriod}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Experience <span style={{ color: '#47B16A' }}>*</span></label>
                  <select
                    className="form-select"
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    required
                  >
                    {experienceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="form-label">Resume (attach file) <span style={{ color: '#47B16A' }}>*</span></label>
                  <input
                    type="file"
                    className="form-control"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      marginBottom: 24,
                    }}
                  >
                    <input
                      type="checkbox"
                      name="receiveInfo"
                      checked={form.receiveInfo}
                      onChange={handleChange}
                      style={{ 
                        width: 18, 
                        height: 18, 
                        marginTop: 2,
                        minWidth: 18,
                        minHeight: 18,
                        flexShrink: 0
                      }}
                    />
                    <label
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        cursor: "pointer",
                      }}
                    >
                      I would like to receive information about IT Services India
                      news and events. By submitting this form, you agree to our
                      privacy policy.
                    </label>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                  >
                    <input
                      type="checkbox"
                      name="wantNDA"
                      checked={form.wantNDA}
                      onChange={handleChange}
                      style={{ 
                        width: 18, 
                        height: 18, 
                        marginTop: 2,
                        minWidth: 18,
                        minHeight: 18,
                        flexShrink: 0
                      }}
                    />
                    <label
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 400,
                        cursor: "pointer",
                      }}
                    >
                      I want a copy of NDA.
                    </label>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="btn w-100"
                  style={{ 
                    backgroundColor: '#28a745', 
                    borderColor: '#28a745', 
                    color: 'white',
                    padding: '12px 24px',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    borderRadius: '8px'
                  }}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplyPage;
