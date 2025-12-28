import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="mb-4 fw-bold">Welcome</h1>

        <Link to="/form" className="btn btn-primary me-3">
          Go to Form
        </Link>

        <Link to="/data" className="btn btn-success">
          View Data
        </Link>
      </div>
    </div>
  );
};

export default Home;
