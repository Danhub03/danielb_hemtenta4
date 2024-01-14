import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import BookingSystem from "./components/BookingSystem";
import MainPage from "./components/MainPage";

function App() {
    return (
        <div className = "App">
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<MainPage/>} />
                    <Route path='/doorsign' element={<Home />}/>
                    <Route path = '/booking' element = {<BookingSystem />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;


// import React from "react";
// import DoorSign from "./components/DoorSign";
// // import Weather from "./components/Weather";
// import BookingSystem from "./components/BookingSystem";
// import "./index.css"; // Import the CSS file
// import DateInfo from "./components/DateInfo";
// import QRcode from "./components/QRcode";



// function App() {
    
//   return (
//     <div className ="move">
//       <DoorSign />
//       <DateInfo />
//       <QRcode />
//       <BookingSystem />
//     </div>
//   );
// }

// export default App;