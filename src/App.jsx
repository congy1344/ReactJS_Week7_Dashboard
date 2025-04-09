import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Overview from "./components/dashboard/Overview";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="main-content">
        <Overview />
      </main>
    </div>
  );
}

export default App;
