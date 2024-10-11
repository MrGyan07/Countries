import { Outlet } from "react-router-dom";
import Headers from "./components/Header";
import { ThemeProvider } from "./contexts/ThemeContext";
import './App.css'

const App = () => {
  return (
      <ThemeProvider>
        <Headers />
        <Outlet />
      </ThemeProvider>
  );
};

export default App;
