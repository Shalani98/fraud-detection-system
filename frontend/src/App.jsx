import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web from "./pages/Web";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Web" element={<Web />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
