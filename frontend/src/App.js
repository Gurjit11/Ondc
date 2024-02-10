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
import Product from "./Components/Products/Product";
import { ClerkProvider } from "@clerk/clerk-react";

function App() {
  const [theme, setTheme] = useState("light");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <>
      <ClerkProvider publishableKey={process.env.REACT_APP_PUBLISHABLE_KEY}>
        <ThemeProvider>
          <CartProvider>
            <BrowserRouter>
              <AppHeader />
              <div className="mt-12">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/:categoryId" element={<Home />}></Route>
                  <Route path="/product/:id" element={<Product />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/order" element={<Order />}></Route>
                </Routes>
              </div>
              <AppFooter />
            </BrowserRouter>
          </CartProvider>
        </ThemeProvider>
      </ClerkProvider>
    </>
  );
}
export default App;
