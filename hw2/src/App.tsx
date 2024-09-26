import "./App.css";
import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from "./OrderStatus"

const products: string[] = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Smartwatch",
  "Camera",
  "Tablet",
  "Monitor",
];

interface Order {
  orderId: number;
  status: string;
}

const orders: Order[] = [
  { orderId: 123, status: "в пути" },
  { orderId: 124, status: "доставлено" },
  { orderId: 125, status: "отменено" },
];

console.log(orders);

function App() {
  return (
    <>
      <Greeting name="Serhii" />
      <ShoppingList products={products} />
      <OrderStatus orderId={orders[1].orderId} status={orders[1].status}/>
    </>
  );
}

export default App;
