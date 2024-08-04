import { PropTypes } from "prop-types";
import Products from "../Constants/product";

// const Card = ({ title, image, description, price }) => {
//   return (
//     <div className="bg-red-500 text-white p-4">
//       <img src={image} alt="product" className="h-28 rounded-lg" />
//       <h1 className="font-extrabold mt-4">{title}</h1>
//       <p>{description}</p>
//       <p>{price}</p>
//     </div>
//   );
// };

const Card = () => {
  const filteredData = Products.filter((item) => item.category === "book");
  return (
    <>
      {filteredData.map((item) => {
        // {Products.map((item)=>)}
        if (item.price === "$20") {
          return (
            <div
              className="bg-slate-950 text-white p-4 rounded-lg "
              key={item.id}
            >
              <img src={item.image} alt="product" className="h-28 rounded-lg" />
              <h1 className=" mt-5  hover:text-purple-600">{item.title}</h1>
              <p className="hover:text-red-300">{item.description} </p>
              <p className="hover:text-sky-600">{item.price}</p>
            </div>
          );
        }

        return <h1 key={item.id}>{item.category}</h1>;
      })}
    </>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
};
export default Card;
