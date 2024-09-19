import Home from "./pages/home";
import Terminal from "./pages/terminal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
