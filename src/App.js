import {} from "antd";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppFooter from "./Components/Footer";
import AppHeader from "./Components/Header";
import PageContent from "./Components/PageContent";
import { useState } from "react";
import ThemeProvider from "./Provider/ThemeProvider";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <AppHeader />
          <PageContent />
          <AppFooter />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
export default App;
