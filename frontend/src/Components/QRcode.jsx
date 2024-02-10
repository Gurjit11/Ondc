import React from "react";
import { QRCode, Typography } from "antd";
import { ThunderboltFilled } from "@ant-design/icons";
const QRcode = () => (
  <div className="bg-white p-2 rounded-md">
    <QRCode
      errorLevel="H"
      value="https://ondc-rouge.vercel.app/"
      icon={<ThunderboltFilled />}
    />
    <div className=" text-black text-center font-bold">Share</div>
  </div>
);
export default QRcode;
