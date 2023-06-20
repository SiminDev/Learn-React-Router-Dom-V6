import "./Product.scss";
import { HealthProduct } from "./ProductData";
import { useNavigate } from "react-router-dom";

function Health() {
  const navigate = useNavigate();

  return (
    <>
      {HealthProduct.map((product) => (
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

export default Health;
