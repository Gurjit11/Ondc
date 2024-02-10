import React from "react";
import { Steps } from "antd";
const description = "This is a description.";
const items = [
  {
    title: "Finished",
    description,
  },
  {
    title: "In Progress",
    description,
  },
  {
    title: "Waiting",
    description,
  },
];
const App = () => (
  <>
    <Steps current={1} percent={60} labelPlacement="vertical" items={items} />
  </>
);
export default App;
