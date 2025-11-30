import React, { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    filterCategory === "all"
      ? products
      : products.filter((p) => p.category === filterCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === "low-high") return a.price - b.price;
    if (sortType === "high-low") return b.price - a.price;
    return 0;
  });
  return (
    <div className="container">
      <div className="sidebar">
        <h3>Filters</h3>
        <label>Category</label>

        <select
          className="filterSelect"
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map((c, i) => (
            <option value={c} key={i}>
              {c.toUpperCase()}
            </option>
          ))}
        </select>
      </div>


      <div className="content">
        <div className="topBar">
          <h2>Products:{filteredProducts.length}</h2>

          <select
            className="sortSelect"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Recommended</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
          </select>
        </div>

        <div className="productGrid">
          {sortedProducts.map((item) => (
            <div className="productCard" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
