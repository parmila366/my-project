import "./App.css";
import Card from "./components/card";
// import { Card as parmila } from "./components/card";
import products from "./Constants/Product";

function App() {
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-3 gap-3 p-3">
        <Card
          title={products.title}
          description={products.description}
          image={products.image}
          price={products.price}
        />
        {/* <Card
          title={item1.title}
          description={item1.description}
          image={item1.image}
          price={item1.price}
        />
        <Card
          title={item1.title}
          description={item1.description}
          image={item1.image}
          price={item1.price}
        /> */}
      </div>
    </>
  );
}

export default App;
