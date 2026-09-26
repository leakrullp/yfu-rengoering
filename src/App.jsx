import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import CleaningZone from "./pages/CleaningZone";

export default function App() {
  return (
    <BrowserRouter basename="/yfu-rengoering">
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/basement" element={<CleaningZone title={"Kælder"} />} />
        <Route path="/plenum" element={<CleaningZone title={"Plenum"} />} />
        <Route path="/stuen" element={<CleaningZone title={"Stueetagen"} />} />
        <Route
          path="/soverum"
          element={<CleaningZone title={"Soverum og bagtrappe"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
