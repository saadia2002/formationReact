import Products from "./components/products";
import "./App.css";

function App() {
  const products = [
    {
      title: "telephon",
      price: 354,
      date: new Date("12/09/2002"),
    },
    {
      title: "pc portable",
      price: 999,
      date: new Date("12/09/2023"),
    },
    {
      title: "toillet paiper",
      price: 54,
      date: new Date("11/11/2002"),
    },
    {
      title: "cartable",
      price: 89,
      date: new Date("12/02/1999"),
    },
    {
      title: "larronge",
      price: 100,
      date: new Date("12/09/2012"),
    },
  ];
  return (
    <div>
      <h2>start programming with items</h2>
      <Products products={products} />
    </div>
  );
}

export default App;
