import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Overview from "./components/dashboard/Overview";
import DetailedReport from "./components/dashboard/DetailedReport";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/detailed-report" element={<DetailedReport />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
