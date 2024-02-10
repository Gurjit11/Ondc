import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import Step1 from "./Step1";
import Step3 from "./Step3";
const Order = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    country_region: "",
    first_name: "",
    last_name: "",
    your_address: "",
    city: "",
    postal_code: "",
    phone_number: "",
  });
  const next = () => {
    setCurrent(current + 1);
  };
  const steps = [
    {
      title: "Select a Delivery Address",
      content: (
        <Step1 formData={formData} setFormData={setFormData} next={next} />
      ),
    },
    {
      title: "Select a Payment Method",
      content: "Second-content",
    },
    {
      title: "Checkout",
      content: <Step3 formData={formData} setFormData={setFormData} />,
    },
  ];
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div className="p-10 ">
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && current > 0 && (
          <Button
            type="dashed"
            className="bg-blue-500 text-white hover:bg-blue-200"
            onClick={() => next()}
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="dashed"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};
export default Order;
