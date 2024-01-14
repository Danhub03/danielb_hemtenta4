import React from "react";
import QRcode from "qrcode.react";
import "../styles/QRcode.css"; // Import the CSS file

const QRCodeGenerator = ({ bookingLink }) => {

  return (
    <div className = "qrcodeContainer">
    <QRcode value = {bookingLink} size = {148} level = {"H"} />
    <p> Skanna QR KOD för att Boka Tid med Bond</p>
    </div>
  );
};

export default QRCodeGenerator;


// import React from "react";
// import "../styles/DoorSignStyles.css"; // Import the CSS file

// const QRcode = () => {
//   return (
//     <div className="DoorSignStyles">
//       <img
//         className="profileImage"
//         src="https://media.licdn.com/dms/image/D4D03AQGihYz0lnYaoA/profile-displayphoto-shrink_400_400/0/1672589177953?e=2147483647&v=beta&t=i2ML7cdidXvS9xSt2F8PiskjHLOtatPCEh8IQV4q8F4"
//         alt="Bild av Bond"
//       />
      
//     </div>
    
//   );
// };

// export default QRcode;
