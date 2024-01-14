import React, { useState } from "react";

const BookingSystem = ({ qrCodeData }) => {
  const [availableSlots, setAvailableSlots] = useState([
    { id: 1, time: "09:00 AM" },
    { id: 2, time: "10:30 AM" },
    // ...lägg till fler tillgängliga tider här
  ]);

  const handleBooking = (slotId) => {
    // Implementera bokningslogik här
    console.log(`Slot ${slotId} booked for ${qrCodeData}`);
  };

  return (
    <div>
      <h2>Available Slots</h2>
      <ul>
        {availableSlots.map((slot) => (
          <li key={slot.id}>
            {slot.time}{" "}
            <button onClick={() => handleBooking(slot.id)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingSystem;
