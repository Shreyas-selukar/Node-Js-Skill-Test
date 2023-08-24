import React from 'react';
import CustomHabit from './CustomHabit';
import { useSelector } from "react-redux";

const CustomHabits = () => {
  const customHabitsState = useSelector((state) => state["customHabits"]);
  
  return (
    <div className='custom-habits'>
      {customHabitsState.map((customHabit) => (
        <CustomHabit customHabit={customHabit} key={customHabit.id} />
      ))}
    </div>
  );
};

export default CustomHabits;
