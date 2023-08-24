import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CalendarView from "./CalendarView";

const Application = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/calendar-view" element={<CalendarView />} />
      </Routes>
    </>
  );
};

export default Application;
