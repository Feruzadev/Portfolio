import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>

          <Route element={<MainLayout />}>
            <Route index element={<Home />} />

          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
