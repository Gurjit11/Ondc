import { Routes, Route } from "react-router-dom";
import Category from "../../Pages/Category";
import Home from "../../Pages/Home";
import Profile from "../../Pages/Profile";
import Order from "../Order";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Category />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/order" element={<Order />}></Route>
    </Routes>
  );
}
export default AppRoutes;
