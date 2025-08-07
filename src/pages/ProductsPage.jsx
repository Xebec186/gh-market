import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  // Capitalize first letter for dropdown value
  const normalizeCategory = (cat) => {
    if (!cat) return "All Categories";
    return cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
  };

  const [selectedCategory, setSelectedCategory] = useState(
    category || "All Categories"
  );

  useEffect(() => {
    // Update selectedCategory when URL param changes
    setSelectedCategory(normalizeCategory(category));
  }, [category]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    navigate(
      value === "All Categories"
        ? "/products"
        : `/products/${value.toLowerCase()}`
    );
  };

  const filteredProducts =
    selectedCategory === "All Categories"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div>
      <div className="max-w-6xl mx-auto pt-24 px-4">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-6">
          {/* Category Dropdown */}
          <div className="mb-4 md:mb-0">
            <select
              className="border rounded px-4 py-2 bg-white text-gray-700 font-medium"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option>All Categories</option>
              <option>Food</option>
              <option>Fashion</option>
              <option>Crafts</option>
              <option>Home</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
