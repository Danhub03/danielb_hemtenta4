import React from "react";
import { Link } from "react-router-dom";

function Bav() {
    return (
        <div className=" container border">
            <h1 className="text-center">Box</h1>
            <Link to="/MainPage">Admin?</Link>
            <br/>
            <Link to="/doorsign">Reservation</Link>
            <br/>
            <Link to= "/booking">Booking</Link>
        </div>
    )
}


export default Bav;