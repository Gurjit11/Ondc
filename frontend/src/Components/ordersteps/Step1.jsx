import { Button, Form, Input, message } from "antd";
import React, { useState } from "react";

const Step1 = ({ formData, setFormData, next }) => {
  const onConfirmOrder = (values) => {
    console.log({ values });
    message.success("Your address has been saved successfully.");
    next();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex bg-contain bg-right bg-no-repeat bg-[url('https://plus.unsplash.com/premium_photo-1679768606092-5043ce780f8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRkcmVzc3xlbnwwfHwwfHx8MA%3D%3D')]">
      <div className="">
        <Form
          onFinish={onConfirmOrder}
          className="w-max p-10 bg-white text-black"
        >
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your Country/Region",
              },
            ]}
            label="Country/Region"
            name="country_region"
          >
            <Input
              placeholder="Enter your Country/Region.."
              name="country_region"
              value={formData.country_region}
              onChange={handleChange}
            />
          </Form.Item>
          <div className="flex">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter your First Name",
                },
              ]}
              label="First Name"
              name="first_name"
            >
              <Input
                placeholder="Enter your First Name.."
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter your Last Name",
                },
              ]}
              label="Last Name"
              name="last_name"
            >
              <Input
                placeholder="Enter your Last Name.."
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
            </Form.Item>
          </div>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your Address",
              },
            ]}
            label="Address"
            name="your_address"
          >
            <Input
              placeholder="Enter your full Address.."
              name="your_address"
              value={formData.your_address}
              onChange={handleChange}
            />
          </Form.Item>
          <div className="flex">
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter your City",
                },
              ]}
              label="City"
              name="city"
            >
              <Input
                placeholder="Enter your City.."
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please enter your Postal Code",
                },
              ]}
              label="Postal Code"
              name="postal_code"
            >
              <Input
                placeholder="Enter your Postal Code.."
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
              />
            </Form.Item>
          </div>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please enter your Phone Number",
              },
            ]}
            label="Phone Number"
            name="phone_number"
          >
            <Input
              placeholder="Enter your Phone Number.."
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </Form.Item>
          <Button
            type="dashed"
            className="bg-blue-500 text-white hover:bg-blue-200"
            htmlType="submit"
          >
            {" "}
            Use this Address
          </Button>
        </Form>
      </div>
      <div className=" "></div>
    </div>
  );
};

export default Step1;
