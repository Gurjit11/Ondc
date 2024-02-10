import {
  HomeFilled,
  ProfileOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Checkbox,
  Drawer,
  Form,
  Image,
  Input,
  InputNumber,
  Menu,
  message,
  Switch,
  Table,
  Typography,
} from "antd";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCart } from "../../API";
import { CartContext } from "../../Provider/CartProvider";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, setCartItems } =
    useContext(CartContext);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutDrawerOpen, setCheckoutDrawerOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   getCart().then((res) => {
  //     setCartItems(res.products);
  //   });
  //   console.log(cartItems);
  // }, []);
  // const onConfirmOrder = (values) => {
  //   console.log({ values });
  //   setCartDrawerOpen(false);
  //   setCheckoutDrawerOpen(false);
  //   message.success("Your order has been placed successfully.");
  // };

  return (
    <div>
      <Badge
        onClick={() => {
          setCartDrawerOpen(true);
        }}
        count={cartItems?.length}
        className="text-2xl"
      >
        <ShoppingCartOutlined />
      </Badge>
      <Drawer
        open={cartDrawerOpen}
        onClose={() => {
          setCartDrawerOpen(false);
        }}
        title="Your Cart"
        width={700}
        // contentWrapperStyle={{ width: 500 }}
      >
        {cartItems.length === 0 ? null : (
          <Table
            pagination={false}
            columns={[
              {
                title: "",
                dataIndex: "thumbnail",
                render: (value) => {
                  return (
                    <Image
                      src={value}
                      alt=""
                      style={{ objectFit: "contain", width: 70, height: 70 }}
                    />
                  );
                },
              },
              {
                title: "Title",
                dataIndex: "title",
              },
              {
                title: "Price",
                dataIndex: "price",
                render: (value) => {
                  return <span>${value}</span>;
                },
              },
              {
                title: "Quantity",
                dataIndex: "quantity",
                render: (value, record) => {
                  return (
                    <InputNumber
                      min={0}
                      defaultValue={value}
                      onChange={(value) => {
                        setCartItems((pre) =>
                          pre.map((cart) => {
                            if (record.id === cart.id) {
                              cart.total = cart.price * value;
                            }
                            return cart;
                          })
                        );
                      }}
                    ></InputNumber>
                  );
                },
              },
              {
                title: "Total",
                dataIndex: "total",
                render: (value) => {
                  return <span>${value}</span>;
                },
              },
            ]}
            dataSource={cartItems}
            summary={(data) => {
              const total = data.reduce((pre, current) => {
                return pre + current.total;
              }, 0);
              return <span>Total: ${total}</span>;
            }}
          />
        )}
        <Button
          onClick={() => {
            setCartDrawerOpen(false);
            navigate("/order");
          }}
          type="default"
          className="bg-blue-500 text-white hover:bg-white"
        >
          Checkout Your Cart
        </Button>
      </Drawer>
      {/* <Drawer
        open={checkoutDrawerOpen}
        onClose={() => {
          setCheckoutDrawerOpen(false);
        }}
        title="Confirm Order"
      >
        <Form onFinish={onConfirmOrder}>
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
            <Checkbox defaultChecked disabled>
              Cash on Delivery
            </Checkbox>
          </Form.Item>
          <Typography.Paragraph type="secondary">
            More methods coming soon
          </Typography.Paragraph>
          <Button type="primary" className="bg-blue-500" htmlType="submit">
            {" "}
            Confirm Order
          </Button>
        </Form>
      </Drawer> */}
    </div>
  );
};

export default Cart;
