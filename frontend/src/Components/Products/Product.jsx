import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Carousel,
  Typography,
  Row,
  Col,
  Divider,
  Rate,
  message,
  Button,
} from "antd";
import {
  AudioMutedOutlined,
  AudioOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";
import { CartContext } from "../../Provider/CartProvider";
import { AiOutlineShareAlt } from "react-icons/ai";

const { Title, Text } = Typography;
function AddToCartButton({ item }) {
  const { cartItems, addToCart, removeFromCart, setCartItems } =
    useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const addProductToCart = () => {
    setLoading(true);
    addToCart(item);
    // addToCart(item.id).then((res) => {
    message.success(`${item.title} has been added to cart!`);
    setLoading(false);
    // });
  };
  return (
    <Button
      type="link "
      className="font-bold text-xl flex justify-center items-center hover:bg-gray-300"
      onClick={() => {
        addProductToCart();
      }}
      loading={loading}
    >
      Add to Cart <ThunderboltFilled />
    </Button>
  );
}

const Product = () => {
  const param = useParams();
  const [item, setItem] = useState();
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${param.id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log(data);
      });
  }, [param]);
  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={[16, 10]}>
        <Col span={12}>
          <Carousel autoplay className="h-[500px] ">
            {item?.images.map((image, index) => (
              <div
                key={index}
                className="justify-center flex  h-[500px] items-center flex-col"
              >
                <div className="h-[480px]">
                  <img
                    className="w-full h-full object-contain "
                    src={image}
                    alt={`Image ${index}`}
                  />
                </div>
                <div className="h-6 w-full bg-black"></div>
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={12}>
          <Title level={2}>{item?.title}</Title>
          <Text strong>Brand: </Text>
          <Text>{item?.brand}</Text>
          <Divider />
          <Text strong>Description: </Text>
          <Text>{item?.description}</Text>
          <Divider />
          <div className="flex justify-between">
            <Typography.Paragraph className="font-bold text-xl">
              Price: ${item?.price}{" "}
              <Typography.Text delete type="danger" className="text-xl">
                $
                {parseFloat(
                  item?.price + (item?.price * item?.discountPercentage) / 100
                ).toFixed(2)}
              </Typography.Text>
              <Typography.Text type="success" className="ml-2 text-xl">
                {item?.discountPercentage}% Off
              </Typography.Text>
            </Typography.Paragraph>
          </div>
          <span className="cursor-pointer flex items-center text-xl justify-center gap-4">
            {speaking ? <AudioMutedOutlined /> : <AudioOutlined />}
            <span className="cursor-pointer">
              <AiOutlineShareAlt
                onClick={() =>
                  navigator.clipboard
                    .writeText(
                      `https://ondc-rouge.vercel.app/product/${item?.id}`
                    )
                    .then(() => {
                      message.success(
                        `${item?.title} has copied successfully!`
                      );
                      setTimeout(() => {
                        message.destroy();
                      }, 3000); // 3000 milliseconds = 3 seconds
                    })
                }
              />
            </span>
          </span>
          <Divider />
          <Text strong>Stock: </Text>
          <Text>{item?.stock}</Text>
          <Divider />
          <Text strong>Rating: </Text>
          <Text className="mr-2">{item?.rating}</Text>
          <Rate allowHalf disabled value={item?.rating} />
          <Divider />
          <AddToCartButton item={item} />
          <Divider />
          <Link to={`/${item?.category}#popular-products`}>
            <Text className="font-bold hover:text-blue-500 ">
              More similar products &rarr;{" "}
            </Text>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
