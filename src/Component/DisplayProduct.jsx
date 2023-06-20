import "./Product.scss";
import { useParams } from "react-router-dom";

function DisplayProduct() {
  const { id } = useParams();
  return (
    <>
      <p>🏷 Product ID : {id}</p>
    </>
  );
}

export default DisplayProduct;
