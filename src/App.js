import "./app.scss";
import URLBar from "./Component/UrlBar";
import Navigation from "./Component/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Product from "./Component/Product";
import Electronic from "./Component/Electronic";
import Book from "./Component/Book";
import Health from "./Component/Health";
import DisplayProduct from "./Component/DisplayProduct";

function App() {
  return (
    <div className="App">
      <URLBar />
      <Navigation />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="product" element={<Product />}>
            <Route path="electronic" element={<Electronic />}></Route>
            <Route path="book" element={<Book />}></Route>
            <Route path="health" element={<Health />}></Route>
            <Route path=":id" element={<DisplayProduct />}></Route>
          </Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
