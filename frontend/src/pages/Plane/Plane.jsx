import React, { useEffect, useState } from "react";
import "./Plane.css";
import { MdCreate } from "react-icons/md";
import PlaneForm from "./PlaneForm";

const Plane = ({ buttonRef }) => {
  const values = ["Playlist1", "Playlist2", "Playlist3", "Playlist4", "Playlist5"]; // Example array of values
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };
  

  return (
    <div className="plane" style={{ top: buttonRef?.current?.offsetTop, left: buttonRef?.current?.offsetLeft}}>
      <div>
        {values.map((value) => (
          <p key={value} className="playlists">{value}</p>
        ))}
      </div>
      <MdCreate onClick={handleButtonClick}/>
      {showForm && (
        <div  className="form-panel">
          <PlaneForm onAction={handleButtonClick}/>
        </div>
      )}
    </div>
  );
};

export default Plane;
