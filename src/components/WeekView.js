import React from "react";
import { Link } from "react-router-dom";
import CustomDayView from "./CustomDayView";
import CustomNavbar from "./CustomNavbar";
import { useSelector } from "react-redux";

const CustomWeekView = () => {
  const customHabitsState = useSelector((state) => state.customHabits);

  let customHabit = {};
  for (let i = 0; i < customHabitsState.length; i++) {
    if (customHabitsState[i].id === Number(localStorage.getItem("customHabitId"))) {
      customHabit = customHabitsState[i];
    }
  }

  return (
    <>
      <CustomNavbar title="Custom Week View" />
      <h1 className="text-center" style={{ textTransform: "capitalize" }}>
        {customHabit.name}
      </h1>
      <div className="custom-days-container">
        {customHabit.weekLog.map((day, index) => (
          <CustomDayView day={day} key={index} />
        ))}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn btn-primary" type="button">
          <Link to="/custom-detail-view">Back to Custom Detail View</Link>
        </button>
      </div>
    </>
  );
};

export default CustomWeekView;
