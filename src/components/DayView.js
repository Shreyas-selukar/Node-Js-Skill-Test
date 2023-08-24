import React from "react";
import { useDispatch } from "react-redux";
import {
  habitCompleted,
  habitUndone,
  habitSetUndecided
} from "../redux/features/habitSlice";

const CustomDayView = ({ day }) => {
  const today = new Date();
  const todayDay = today.getDay();

  const dispatch = useDispatch();

  const selectedDate = new Date(day.yyyy, day.mm, day.dd);

  const markAsCompleted = () => {
    if (day.id > todayDay) {
      alert("You cannot change the status of future days.");
      return;
    }
    dispatch(habitCompleted(day.id));
  };

  const markAsUndone = () => {
    if (day.id > todayDay) {
      alert("You cannot change the status of future days.");
      return;
    }
    dispatch(habitUndone(day.id));
  };

  const markAsUndecided = () => {
    if (day.id > todayDay) {
      alert("You cannot change the status of future days.");
      return;
    }
    dispatch(habitSetUndecided(day.id));
  };

  return (
    <div className="custom-day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">
        {selectedDate.getDate()}/{selectedDate.getMonth() + 1}/
        {selectedDate.getFullYear()}
      </p>
      <i
        className={
          day.isDone === true
            ? "fa-solid fa-circle-check circle-icon active"
            : "fa-solid fa-circle-check circle-icon"
        }
        onClick={markAsCompleted}
      ></i>
      <i
        className={
          day.isDone === false
            ? "fa-solid fa-circle-xmark circle-icon active"
            : "fa-solid fa-circle-xmark circle-icon"
        }
        onClick={markAsUndone}
      ></i>
      <i
        className={
          day.isDone === ""
            ? "fa-solid fa-circle-minus circle-icon active"
            : "fa-solid fa-circle-minus circle-icon"
        }
        onClick={markAsUndecided}
      ></i>
    </div>
  );
};

export default CustomDayView;
