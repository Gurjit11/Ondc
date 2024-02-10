import { HomeFilled, ThunderboltFilled, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { getCart } from "../../API";
import { ThemeContext } from "../../Provider/ThemeProvider";
import AutoCompleteSearch from "../Autocomplete";
import Cart from "../Cart";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

function AppHeader() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const onMenuClick = (item) => {
    navigate(`/${item.key}`);
  };
  return (
    <div className="px-5 items-center flex fixed z-10 w-full backdrop-blur-md bg-white/70 top-0 justify-between">
      <Menu
        theme={theme}
        className=" font-semibold h-12"
        onClick={onMenuClick}
        mode="horizontal"
        items={[
          {
            label: <HomeFilled />,
            key: "",
          },
          {
            label: "Men",
            key: "men",
            children: [
              {
                label: "Men's Shirts",
                key: "mens-shirts",
              },
              {
                label: "Men's Shoes",
                key: "mens-shoes",
              },
              {
                label: "Men's Watches",
                key: "mens-watches",
              },
            ],
          },
          {
            label: "Women",
            key: "women",
            children: [
              {
                label: "Women's Dresses",
                key: "womens-dresses",
              },
              {
                label: "Women's Shoes",
                key: "womens-shoes",
              },
              {
                label: "Women's Watches",
                key: "womens-watches",
              },
              {
                label: "Women's Bags",
                key: "womens-bags",
              },
              {
                label: "Women's Jewellery",
                key: "womens-jewellery",
              },
            ],
          },
          {
            label: "Fragrances",
            key: "fragrances",
          },
        ]}
      />
      <div className=" flex items-center justify-center gap-6 font-bold">
        <span>
          <AutoCompleteSearch />
        </span>
        <span className="text-2xl italic">
          <ThunderboltFilled /> SuperStore
        </span>
      </div>
      <SignedIn>
        {/* <div className="flex justify-between items-center gap-6"> */}
        <span className="flex gap-7 justify-center items-center">
          <Cart />
          <Link to="/profile">
            <UserOutlined className="text-xl" />
          </Link>
          <SignOutButton signOutCallback={() => redirect("/")} />
        </span>
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      {/* <Switch
          checked={theme === "dark"}
          onChange={toggleTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        /> */}
      {/* </div> */}
    </div>
  );
}

export default AppHeader;
