import "./Product.scss";
import { ElectronicProduct } from "./ProductData";
import { useNavigate } from "react-router-dom";

function Electronic() {
  const navigate = useNavigate();

  return (
    <>
      {ElectronicProduct.map((product) => (
        <div
          className="product-box"
          onClick={() => {
            navigate(`/product/${product.id}`);
          }}
        >
          {product.name}
        </div>
      ))}
    </>
  );
}

export default Electronic;
