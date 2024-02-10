import React, { useEffect, useState } from "react";
import { DollarOutlined, DollarTwoTone, UserOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";
import { getAllProducts } from "../API";
import { Link } from "react-router-dom";
const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: "right",
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);
const renderItem = (title, count, id) => ({
  value: title,
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to={`/product/${id}`}>{title}</Link>
      <span>
        <DollarTwoTone /> {count}
      </span>
    </div>
  ),
});
const options = [
  {
    label: renderTitle("Libraries"),
    options: [
      renderItem("AntDesign", 10000),
      renderItem("AntDesign UI", 10600),
    ],
  },
  {
    label: renderTitle("Solutions"),
    options: [
      renderItem("AntDesign UI FAQ", 60100),
      renderItem("AntDesign FAQ", 30010),
    ],
  },
  {
    label: renderTitle("Articles"),
    options: [renderItem("AntDesign design language", 100000)],
  },
];
const AutoCompleteSearch = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllProducts().then((res) => {
      setItems(res.products);
    });
  }, []);
  return (
    <AutoComplete
      popupClassName="certain-category-search-dropdown"
      popupMatchSelectWidth={500}
      style={{
        width: 250,
      }}
      options={items.map((item) => renderItem(item.title, item.price, item.id))}
      size="large"
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    >
      <Input.Search size="large" placeholder="input here" />
    </AutoComplete>
  );
};
export default AutoCompleteSearch;
