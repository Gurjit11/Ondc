import React from "react";
import { Badge, Carousel } from "antd";
const ImageCarousel = ({ items }) => (
  <Carousel autoplay>
    {items.map((item, index) => (
      <Badge.Ribbon
        className="translate-x-[-10px] text-3xl items-end max-w-[200px] p-2 pl-5"
        text={`${item.discountPercentage}% Off`}
        key={index}
        color="pink"
      >
        <div className="h-[500px] ">
          <img
            src={item.thumbnail}
            alt={item.name}
            className="w-full h-full object-contain"
          />
        </div>
      </Badge.Ribbon>
    ))}
  </Carousel>
);
export default ImageCarousel;
