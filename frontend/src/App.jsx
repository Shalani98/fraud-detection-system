import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import React from "react";

import Web from "./pages/Web";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Web" />} />  {/* redirect "/" */}
        <Route path="/Web" element={<Web />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
