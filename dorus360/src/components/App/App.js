import { Route, Routes, Navigate } from "react-router-dom";
import Dorus360 from "../Dorus360/Dorus360";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dorus360 />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
