import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import OpenWeather from './componets/openweather/OpenWeather';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="openweather" element={<OpenWeather/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);