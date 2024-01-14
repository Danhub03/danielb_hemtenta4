import React from "react";
import "../styles/DoorSignStyles.css"; // Import the CSS file

const DoorSign = () => {
  return (
    <div className="DoorSignStyles">
      <img
        className="profileImage"
        src="https://media.licdn.com/dms/image/D4D03AQGihYz0lnYaoA/profile-displayphoto-shrink_400_400/0/1672589177953?e=2147483647&v=beta&t=i2ML7cdidXvS9xSt2F8PiskjHLOtatPCEh8IQV4q8F4"
        alt="Bild av Bond"
      />
      <div className="textContainer">
        <h2>Bondhon Shahriar Alam</h2>
        <h3>Biträdande rektor</h3>
        <p>
          Mob: +46 76 108 78 89
          Mejl: bondhon.shahriaralam@ntig.se
        </p>
      </div>
    </div>
    
  );
};

export default DoorSign;
