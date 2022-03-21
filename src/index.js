import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import Activity from "./componets/activitypage/Activity";
import OpenData from "./componets/openweather/OpenData";
import History from "./componets/historycharts/History";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="opendata" element={<OpenData/>}/>
      <Route path="activity" element={<Activity/>}/>
      <Route path="weatherhistory" element={<History/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);