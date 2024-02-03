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
  Select,
  Radio,
  Input,
  Space,
  Slider,
} from "antd";
import { useEffect, useState } from "react";
import { addToCart, getAllProducts, getProductsByCategory } from "../../API";
import { useParams } from "react-router-dom";

function Products() {
  const [loading, setLoading] = useState(false);
  const param = useParams();
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("az");
  const options = [];
  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    setLoading(true);
    (param?.categoryId
      ? getProductsByCategory(param.categoryId)
      : getAllProducts()
    ).then((res) => {
      setItems(res.products);
      setLoading(false);
    });
  }, [param]);

  const getSortedItems = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => {
      const aLowerCaseTitle = a.title.toLowerCase();
      const bLowerCaseTitle = b.title.toLowerCase();

      if (sortOrder === "az") {
        return aLowerCaseTitle > bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
          ? 0
          : -1;
      } else if (sortOrder === "za") {
        return aLowerCaseTitle < bLowerCaseTitle
          ? 1
          : aLowerCaseTitle === bLowerCaseTitle
          ? 0
          : -1;
      } else if (sortOrder === "lowHigh") {
        return a.price > b.price ? 1 : a.price === b.price ? 0 : -1;
      } else if (sortOrder === "highLow") {
        return a.price < b.price ? 1 : a.price === b.price ? 0 : -1;
      }
    });
    return sortedItems;
  };

  return (
    <div className="flex">
      <div className="w-[600px] p-5 border-r border-gray-300">
        <div className="text-xl font-bold mb-2 border-b border-gray-400">
          Featured
        </div>
        {/* <Select
          onChange={(value) => {
            setSortOrder(value);
          }}
          defaultValue={"az"}
          options={[
            {
              label: "Alphabetically a-z",
              value: "az",
            },
            {
              label: "Alphabetically z-a",
              value: "za",
            },
            {
              label: "Price Low to High",
              value: "lowHigh",
            },
            {
              label: "Price High to Low",
              value: "highLow",
            },
          ]}
        ></Select> */}
        <Radio.Group
          onChange={(e) => {
            setSortOrder(e.target.value);
          }}
          value={sortOrder}
        >
          <Space direction="vertical">
            <Radio value="az">Alphabetically a-z</Radio>
            <Radio value="za">Alphabetically z-a</Radio>
            <Radio value="lowHigh">Price Low to High</Radio>
            <Radio value="highLow">Price High to Low</Radio>

            {/* <Radio value={4}>
              More...
              {value === 4 ? (
                <Input
                  style={{
                    width: 100,
                    marginLeft: 10,
                  }}
                />
              ) : null}
            </Radio> */}
          </Space>
        </Radio.Group>
        <div className="text-xl mt-5 font-bold mb-2 border-b border-gray-400">
          Filters
        </div>
        <Select
          mode="multiple"
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Please select"
          defaultValue={["a10", "c12"]}
          onChange={handleChange}
          options={options}
        />
        <div className="text-xl mt-5 font-bold mb-2 border-b border-gray-400">
          Price
        </div>
        <Slider />
      </div>
      <div>
        <List
          loading={loading}
          grid={{ column: 3 }}
          renderItem={(product, index) => {
            return (
              <Badge.Ribbon
                className="translate-x-[-20px] "
                text={`${product.discountPercentage}% Off`}
                color="pink"
              >
                <Card
                  className="m-5 p-5 shadow-2xl "
                  title={product.title}
                  key={index}
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
          }}
          dataSource={getSortedItems()}
        ></List>
      </div>
    </div>
  );
}

function AddToCartButton({ item }) {
  const [loading, setLoading] = useState(false);
  const addProductToCart = () => {
    setLoading(true);
    addToCart(item.id).then((res) => {
      message.success(`${item.title} has been added to cart!`);
      setLoading(false);
    });
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
export default Products;
