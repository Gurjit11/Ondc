import React from "react";
import {
  Badge,
  Button,
  Card,
  Image,
  List,
  message,
  Rate,
  Spin,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Provider/CartProvider";
import { AudioMutedOutlined, AudioOutlined } from "@ant-design/icons";

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
      type="link"
      onClick={() => {
        addProductToCart();
      }}
      loading={loading}
    >
      Add to Cart
    </Button>
  );
}

const ProductCard = ({ product }) => {
  const [speaking, setSpeaking] = useState(false);

  return (
    <Badge.Ribbon
      className="translate-x-[-20px] "
      text={`${product.discountPercentage}% Off`}
      color="pink"
    >
      <Card
        className="m-5 p-5 shadow-2xl "
        title={product.title}
        cover={
          <Image
            className=" object-contain"
            height={200}
            src={product.thumbnail}
          />
        }
        actions={[
          <Rate allowHalf disabled value={product.rating} />,
          <AddToCartButton item={product} />,
        ]}
      >
        <Card.Meta
          title={
            <div className="flex justify-between">
              <Typography.Paragraph>
                Price: ${product.price}{" "}
                <Typography.Text delete type="danger">
                  $
                  {parseFloat(
                    product.price +
                      (product.price * product.discountPercentage) / 100
                  ).toFixed(2)}
                </Typography.Text>
              </Typography.Paragraph>
              <span className="cursor-pointer">
                {speaking ? <AudioMutedOutlined /> : <AudioOutlined />}
              </span>
            </div>
          }
          description={
            <Typography.Paragraph
              ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
            >
              {product.description}
            </Typography.Paragraph>
          }
        ></Card.Meta>
      </Card>
    </Badge.Ribbon>
  );
};

export default ProductCard;
