import React from "react";
import "../styles/DateInfo.css"; // Import the CSS file
import Weather from "../components/Weather";

const DateInfo = () => {
  const currentDate = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  const weekNumber = currentDate.toLocaleString("en-US", { week: "numeric" });

  return (
    
    <div className="dateContainer">
            <Weather /> 

      {/* <h3>Current Date and Week</h3> */}
      <p>{formattedDate}</p>
      <p>|| {weekNumber}</p>
    </div>
  );
};

export default DateInfo;
