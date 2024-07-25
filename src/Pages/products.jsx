import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/button";

const products = [
  {
    id: 1,
    name: "Sepatu Super",
    price: "2.000.000",
    image: "/images/shoes-img.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium esse quae minus omnis nam nulla, culpa aliquam consequuntur odio, fugit, modi earum maxime! Adipisci asperiores ipsam unde modi minima!",
  },
  {
    id: 2,
    name: "Sepatu lama",
    price: "3.000.000",
    image: "/images/shoes-img.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium esse quae minus omnis nam nulla, culpa aliquam consequuntur odio, fugit, modi earum maxime! Adipisci asperiores ipsam unde modi minima!",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductPage;
