import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Overview from "./components/dashboard/Overview";
import Projects from "./components/Projects";
import Teams from "./components/Teams";
import Analytics from "./components/Analytics";
import Messages from "./components/Messages";
import Integrations from "./components/Integrations";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/dashboard" element={<Overview />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;
