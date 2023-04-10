import React, { useState } from "react";
import "./Rooms.css";
import { useInView } from 'react-intersection-observer';

const Rooms = ({ rooms }) => {
  const [currentRoom, setCurrentRoom] = useState("1");
  const [changingImage, setChangingImage] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleRoomHover = (room) => {
    setCurrentRoom(room);
    setChangingImage(true);
  };

  const getRoomImage = (room) => {
    const selectedRoom = rooms.find((r) => r.alt === room);
    return selectedRoom.url;
  };

  return (
    <div className="roomscontainer">
      <div className="section-left">
        <div className="headings">
          <h2
            className={currentRoom === "1" ? "selected-room" : ""}
            onMouseEnter={() => handleRoomHover("1")}
          >
            1-Room
          </h2>
          <h2
            className={currentRoom === "2" ? "selected-room" : ""}
            onMouseEnter={() => handleRoomHover("2")}
          >
            2-Rooms
          </h2>
          <h2
            className={currentRoom === "3" ? "selected-room" : ""}
            onMouseEnter={() => handleRoomHover("3")}
          >
            3-Rooms
          </h2>
          <h2
            className={currentRoom === "4" ? "selected-room" : ""}
            onMouseEnter={() => handleRoomHover("4")}
          >
            Patio Apartments
          </h2>
          <h2
            className={currentRoom === "5" ? "selected-room" : ""}
            onMouseEnter={() => handleRoomHover("5")}
          >
            Apartments With Terrace
          </h2>
        </div>
      </div>

      <div className='section-right'>
        <img ref={ref}
          className={`img ${inView ? "img-visible" : ""}`}
          src={getRoomImage(currentRoom)}
          alt={currentRoom}
          onLoad={() => setChangingImage(false)}
        />
      </div>
    </div>
  );
};

export default Rooms;
