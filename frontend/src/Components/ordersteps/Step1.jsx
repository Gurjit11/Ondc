import { Button, Checkbox, Form, Input, Typography, message } from "antd";
import React from "react";

const Step1 = () => {
  const onConfirmOrder = (values) => {
    console.log({ values });
    message.success("Your order has been placed successfully.");
  };
  return (
    <Form onFinish={onConfirmOrder} className="w-max p-10">
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please enter your full name",
          },
        ]}
        label="Full Name"
        name="full_name"
      >
        <Input placeholder="Enter your full name.." />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter a valid email",
          },
        ]}
        label="Email"
        name="your_name"
      >
        <Input placeholder="Enter your email.." />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please enter your address",
          },
        ]}
        label="Address"
        name="your_address"
      >
        <Input placeholder="Enter your full address.." />
      </Form.Item>
      <Form.Item>
        <Checkbox defaultChecked>Cash on Delivery</Checkbox>
      </Form.Item>
      <Typography.Paragraph type="secondary">
        More methods coming soon
      </Typography.Paragraph>
      <Button type="dashed" htmlType="submit">
        {" "}
        Confirm Order
      </Button>
    </Form>
  );
};

export default Step1;
