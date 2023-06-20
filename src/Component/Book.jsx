import "./Product.scss";
import { BookProduct } from "./ProductData";
import { useNavigate } from "react-router-dom";

function Book() {
  const navigate = useNavigate();

  return (
    <>
      {BookProduct.map((product) => (
        <div
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
          className="product-box"
        >
          {product.name}
        </div>
      ))}
    </>
  );
}

export default Book;
