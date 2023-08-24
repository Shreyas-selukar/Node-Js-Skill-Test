import React from "react";
import { useDispatch } from "react-redux";
import { removeHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";

const CustomHabit = ({ habit }) => {
  const today = new Date();
  const todayDay = today.getDay();
  let doneCount = 0;

  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      doneCount++;
    }
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleHabitDeletion = () => {
    dispatch(removeHabit(habit.id));
    alert("Your habit has been successfully deleted.");
  };

  const redirectToWeekView = () => {
    localStorage.setItem("customHabitId", habit.id);
    navigate("/custom-week-view");
  };

  return (
    <div className="custom-habit">
      <div className="habit-details">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{ textTransform: "capitalize" }}>{habit.name}</h4>
          <p className="completion-status">{doneCount}/{todayDay + 1} days</p>
        </div>
      </div>
      <div className="habit-actions">
        <div className="view-week-btn" onClick={redirectToWeekView}>
          <i className="fa-solid fa-calendar-week"></i>
          View Week
        </div>
        <i className="fa-solid fa-trash" onClick={handleHabitDeletion}></i>
      </div>
    </div>
  );
};

export default CustomHabit;
