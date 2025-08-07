import { useState } from "react";
import Navbar from "../components/Navbar";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All Categories"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-24 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-6">
          {/* Category Dropdown */}
          <div className="mb-4 md:mb-0">
            <select
              className="border rounded px-4 py-2 bg-white text-gray-700 font-medium"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Categories</option>
              <option>Food</option>
              <option>Clothing</option>
              <option>Electronics</option>
              <option>Crafts</option>
              <option>Home</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
