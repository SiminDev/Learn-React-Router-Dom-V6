import "./URLBar.scss";
import { useLocation } from "react-router-dom";

function URLBar() {
  const location = useLocation();

  return (
    <div className="URLBar">
      <label>
        URL: <span>{location.pathname}</span>
      </label>
    </div>
  );
}

export default URLBar;
