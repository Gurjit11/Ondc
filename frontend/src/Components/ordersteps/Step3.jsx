import React, { useContext } from "react";
import { Table, Image, InputNumber, Button } from "antd";
import { CartContext } from "../../Provider/CartProvider";

const Step3 = ({ formData }) => {
  const { cartItems, addToCart, removeFromCart, setCartItems } =
    useContext(CartContext);
  return (
    <div className="text-black flex p-10 flex-col items-center leading-3">
      <h1 className="text-3xl font-bold ">Order Details</h1>
      <div className="flex mt-5 flex-row-reverse">
        <div className="flex flex-col font-semibold  p-10 borde ">
          <div className="flex ">
            <div>Address: </div>{" "}
            <div className="items-start flex flex-col w-[200px] text-start leading-none ml-5">
              <span>
                {formData.first_name} {formData.last_name},
              </span>
              <br></br>
              <span className="max-w-[200px] overflow-clip">
                {" "}
                {formData.your_address.length > 30 ? (
                  <span>{formData.your_address.slice(0, 23)}...</span>
                ) : (
                  formData.your_address
                )}
              </span>
              <br></br>
              <span>
                {" "}
                {formData.city}, {formData.country_region},
                {formData.postal_code}
              </span>
            </div>
          </div>
          <div className="flex mt-5">
            <div className=" ">Contact:</div>
            <div className="ml-5"> {formData.phone_number}</div>
          </div>
          <div className="flex flex-col items-start mt-10 borde ">
            <div className=" text-blue-600 text-xl text-center">
              Order Summary
            </div>
            <div className="flex justify-between w-full mt-5">
              <div>Items Total: </div>
              <div>
                {cartItems.reduce((pre, current) => pre + current.total, 0)}
              </div>
            </div>
            <div className="flex justify-between w-full mt-2">
              <div>Delivery: </div>
              <div>200</div>
            </div>
            <div className="flex justify-between w-full mt-5">
              <div>Total: </div>
              <div>
                {cartItems.reduce((pre, current) => pre + current.total, 0) +
                  200}
              </div>
            </div>
            <div className="h-[0.1px] mt-3 bg-blue-500 w-full"></div>
            <div className="flex text-blue-500 justify-between w-full mt-2">
              <div>Order Total: </div>
              <div>
                {cartItems.reduce((pre, current) => pre + current.total, 0) +
                  200}
              </div>
            </div>
            <button className="bg-blue-500 w-full p-3 text-white font-bold mt-3 rounded-md">
              Place Order
            </button>
          </div>
        </div>
        <div className="w-2/3 text-start">
          <h2 className="text-xl font-bold">Items Purchased</h2>
          <Table
            pagination={false}
            className="borde "
            columns={[
              {
                title: "",
                dataIndex: "thumbnail",
                render: (value) => (
                  <Image
                    src={value}
                    alt=""
                    style={{ objectFit: "contain", width: 70, height: 70 }}
                  />
                ),
              },
              {
                title: "Title",
                dataIndex: "title",
              },
              {
                title: "Price",
                dataIndex: "price",
                render: (value) => <span>${value}</span>,
              },
              {
                title: "Quantity",
                dataIndex: "quantity",
                render: (value, record) => (
                  <InputNumber min={0} value={value} disabled />
                ),
              },
              {
                title: "Total",
                dataIndex: "total",
                render: (value) => <span>${value}</span>,
              },
            ]}
            dataSource={cartItems}
            // summary={(data) => {
            //   const total = data.reduce(
            //     (pre, current) => pre + current.total,
            //     0
            //   );
            //   return (
            //     <>
            //       <Table.Summary.Row>
            //         <Table.Summary.Cell
            //           colSpan={3}
            //           style={{ textAlign: "right" }}
            //         >
            //           Total:
            //         </Table.Summary.Cell>
            //         <Table.Summary.Cell>${total}</Table.Summary.Cell>
            //       </Table.Summary.Row>
            //       <Table.Summary.Row>
            //         <Table.Summary.Cell colSpan={4}>
            //           <Button type="primary">Confirm Order</Button>
            //         </Table.Summary.Cell>
            //       </Table.Summary.Row>
            //     </>
            //   );
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
