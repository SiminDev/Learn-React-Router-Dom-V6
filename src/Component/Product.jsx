import "./Product.scss";
import { NavLink, Outlet } from "react-router-dom";

function Product() {
  return (
    <>
      <h1>📦 Product Page</h1>
      <div className="product-list-wrapper">
        <ul className="category">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-category" : "inactive-category"
            }
            to="/product/electronic"
          >
            » Electronics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-category" : "inactive-category"
            }
            to="/product/book"
          >
            » Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-category" : "inactive-category"
            }
            to="/product/health"
          >
            » Health & Beauty
          </NavLink>
        </ul>
        <div className="product-list">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Product;
