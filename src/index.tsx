import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AddressContextProvider } from "./Contexts/Address.context";
import { WeatherContextProvider } from "./Contexts/Weather.context";
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.render(
  <React.StrictMode>
    <WeatherContextProvider>
      <AddressContextProvider>
        <App />
      </AddressContextProvider>
    </WeatherContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
