import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FormPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", mobile: "" });

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    let existingData = JSON.parse(localStorage.getItem("formData"));
    if (!Array.isArray(existingData)) {
      existingData = [];
    }

    const updatedData = [...existingData, data];
    localStorage.setItem("formData", JSON.stringify(updatedData));

    alert("Data stored successfully 👍");
    setData({ name: "", email: "", mobile: "" });

    navigate("/data");
  };

  return (
    <div className="container mt-4">

      {/* 🔹 Home Icon */}
      <div className="d-flex justify-content-end mb-3">
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/")}
        >
          <i className="bi bi-house-door-fill me-1"></i> Home
        </button>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center mb-4">User Form</h3>

              <form onSubmit={formSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={data.name}
                    placeholder="Enter name"
                    onChange={dataHandler}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={data.email}
                    placeholder="Enter email"
                    onChange={dataHandler}
                    required
                  />
                </div>

                {/* Mobile */}
                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    value={data.mobile}
                    placeholder="Enter mobile number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    onChange={dataHandler}
                    required
                  />
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>

              {/* Data Page Link */}
              <div className="text-center mt-3">
                <Link to="/data" className="btn btn-link">
                  View Stored Data
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
