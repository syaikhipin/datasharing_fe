import React, { useState } from "react";

function MyMap() {
  // Coordinates for Palermo, Italy
  const [centerPalermo, setCenterPalermo] = useState({
    lat: 38.1157,
    lng: 13.3615,
  });

  // Coordinates for Dublin, Ireland
  const [centerIreland, setCenterIreland] = useState({
    lat: 53.3498,
    lng: -6.2603,
  });

  return (
    <div>
      {/* Map for Palermo, Italy */}
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d${centerPalermo.lat}!2d${centerPalermo.lng}!3d0.2700732953097106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x${centerPalermo.lat}!2sPalermo, Italy!5e0!3m2!1sen!2sin!4v1694330714409!5m2!1sen!2sin`}
        width="100%"
        height="240"
        style={{ borderRadius: "5px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="map_palermo"
      ></iframe>

    </div>
  );
}

export default MyMap;
