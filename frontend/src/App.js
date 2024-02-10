import {} from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppFooter from "./Components/Footer";
import AppHeader from "./Components/Header";
import { useState } from "react";
import ThemeProvider from "./Provider/ThemeProvider";
import CartProvider from "./Provider/CartProvider";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Profile from "./Pages/Profile";
import Order from "./Components/ordersteps/Order";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <BrowserRouter>
            <AppHeader />
            <div className="mt-16">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/:categoryId" element={<Home />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/order" element={<Order />}></Route>
              </Routes>
            </div>
            <AppFooter />
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
