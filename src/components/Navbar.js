import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCustomHabit } from "../redux/features/customHabitSlice";

const CustomNavbar = ({ title }) => {
  const dispatch = useDispatch();
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  const handleSave = () => {
    const customHabitName = document.getElementById("customHabitName").value;
    dispatch(addCustomHabit(customHabitName));
    alert("Your custom habit has been added successfully.");
    document.getElementById("customHabitName").value = "";
  };

  return (
    <>
      <div className="custom-navbar">
        <h3>
          {hour <= 12
            ? "Morning"
            : hour <= 17
            ? "Afternoon"
            : hour <= 21
            ? "Evening"
            : "Night"}
        </h3>
        <div className="custom-right-nav">
          <h5>{title}</h5>
          <button
            className="add-custom-habit-btn"
            data-bs-toggle="modal"
            data-bs-target="#customModal"
          >
            <i className="fa-solid fa-plus"></i> Add Custom Habit
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="customModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="customModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="customModalLabel">
                New Custom Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="customHabitName" className="form-label">
                  NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customHabitName"
                  placeholder="Enter custom habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;
