import React from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import WebpackLogo from "./images/webpack-logo.jpeg";
import "./css/client.scss";

const App = () => {
  const position = [49.2123148, -122.9224902];
  return (
    <div>
      <img src={WebpackLogo} />
      <button className="btn btn-primary">Test</button>
      <Map center={position} zoom={15} className="Map">
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
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");
  document.body.append(root);

  ReactDOM.render(<App />, root);
});
