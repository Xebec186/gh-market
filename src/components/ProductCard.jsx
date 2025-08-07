import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm flex flex-col items-center hover:shadow-md transition cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-40 object-cover rounded-tr rounded-tl mb-2"
      />
      <div className="w-full text-left pl-3 pb-3">
        <p className="font-medium text-gray-900">{product.name}</p>
        <p className="text-green-700 font-semibold">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
