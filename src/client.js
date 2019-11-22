import React from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import WebpackLogo from "./images/webpack-logo.jpeg";

const App = () => {
  const position = [49.2123148, -122.9224902];
  return (
    <div>
      <Map center={position} zoom={15} style={{ height: "800px" }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Codecore College. <br /> New Westminster BC, V3M 6Z1
          </Popup>
        </Marker>
      </Map>

      <img
        style={{
          borderRadius: "20px",
          filter: "blue(5px"
        }}
        width="400px"
        height="200px"
        src={WebpackLogo}
      />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");
  document.body.append(root);

  ReactDOM.render(<App />, root);
});
