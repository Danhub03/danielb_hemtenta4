import React from "react";
import DoorSign from "../components/DoorSign";
// import Weather from "./components/Weather";
// import BookingSystem from "../components/BookingSystem";
import "../index.css"; // Import the CSS file
import DateInfo from "../components/DateInfo";
// import QRcode from "../components/QRcode";
import QRCodeGenerator from "./QRcode";
import bookingLink from "./QRcode";


const someOtherData = "some other data"; // Till exempel, om detta deklarerar 'bookingLink'

const Home = () => {
//   const bookingLink = "http://192.168.198.85:3005"; // Ta bort detta om 'bookingLink' redan är deklarerat
const bookingLink = "https://qrco.de/behG3t"; // Ta bort detta om 'bookingLink' redan är deklarerat
// const bookingLink = "https://qrco.de/behG7M"; // Ta bort detta om 'bookingLink' redan är deklarerat


  return (
    <div className ="move">
      <DoorSign />
      <DateInfo />
      <QRCodeGenerator bookingLink = {bookingLink} />
      {/* <QRcode />
      <BookingSystem /> */}
    </div>
  );
}

export default Home;