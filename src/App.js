import { Outlet } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./util/Scroll";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Outlet />
    </div>
  );
}

export default App;
