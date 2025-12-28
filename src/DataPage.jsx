import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const DataPage = () => {
  const [storeData, setStoreData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("formData")) || [];
    setStoreData(data);
  }, []);

  const deleteRecord = (indexToDelete) => {
    const updatedData = storeData.filter(
      (_, index) => index !== indexToDelete
    );

    localStorage.setItem("formData", JSON.stringify(updatedData));
    setStoreData(updatedData);
  };

  return (
    <div className="container mt-4">

     
      <div className="d-flex justify-content-between align-items-center mb-3">

        {/* Home Icon */}
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/")}
        >
          <i className="bi bi-house-door-fill me-1"></i> Home
        </button>

        {/* Add Button */}
        <Link to="/form" className="btn btn-success">
          + Add New Record
        </Link>
      </div>

      <h2 className="text-center mb-3">Submitted Records</h2>

      {storeData.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead className="table-dark text-center">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {storeData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteRecord(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "400px" }}
        >
          <h2 className="fw-bold shadow p-3 rounded border">
            No Data Found
          </h2>
        </div>
      )}
    </div>
  );
};

export default DataPage;
