import { useParams } from "react-router-dom";
import products from "../data/products.json";
import Navbar from "../components/Navbar";
import { FaStar } from "react-icons/fa";

const dummyReviews = [
  {
    name: "Vanessa K.",
    rating: 5,
    comment:
      "Absolutely love this dress! The fabric is beautiful and the fit is perfect. I received so many compliments when I wore it.",
  },
  {
    name: "Kwame O.",
    rating: 4,
    comment:
      "Great craftsmanship and design, a classic. It's a bit long, but that's fine for the quality.",
  },
  {
    name: "Afia Owusu",
    rating: 5,
    comment:
      "This exceeded my expectations. The colors are vibrant and the customer service by the seller is top-notch. I highly recommend!",
  },
];

// Dummy seller info
const seller = {
  name: "Ama's Creations",
  contact: "Contact Seller",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
};

function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => String(p.id) === String(productId));

  // For demo, use the same image multiple times
  const images = [product?.img, product?.img, product?.img];

  // Calculate average rating
  const avgRating =
    dummyReviews.reduce((sum, r) => sum + r.rating, 0) / dummyReviews.length;

  // Ratings breakdown
  const ratingsCount = [0, 0, 0, 0, 0];
  dummyReviews.forEach((r) => {
    ratingsCount[r.rating - 1]++;
  });

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="pt-24 text-center text-xl text-gray-600">
          Product not found.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-24 px-4 pb-16">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="hover:underline cursor-pointer">Home</span> /{" "}
          <span className="hover:underline cursor-pointer">
            {product.category}
          </span>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl p-6 mb-8">
          <div className="flex flex-col gap-4">
            <img
              src={images[0]}
              alt={product.name}
              className="rounded-lg w-full h-80 object-cover bg-gray-100"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src={images[1]}
                alt={product.name}
                className="rounded-lg w-full h-40 object-cover bg-gray-100"
              />
              <img
                src={images[2]}
                alt={product.name}
                className="rounded-lg w-full h-40 object-cover bg-gray-100"
              />
            </div>
          </div>
          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-700 mb-4">
                This is a sample description of the product for demonstration.
                Replace with high-quality fabric and finishing for a unique
                design. It’s perfect for both casual and formal occasions.
                Contact seller for custom orders.
              </p>
              <div className="mb-2">
                <span className="font-semibold text-lg">Price</span>
                <div className="text-2xl font-bold text-green-700">
                  GHC {product.price}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-4 mb-2">
                <img
                  src={seller.avatar}
                  alt={seller.name}
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <div className="font-semibold">{seller.name}</div>
                  <button className="text-blue-600 text-sm hover:underline">
                    {seller.contact}
                  </button>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded transition">
                  Add to Cart
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews & Ratings */}
        <div className="bg-white rounded-xl p-6 mt-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">{avgRating.toFixed(1)}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(avgRating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              {dummyReviews.length} reviews
            </span>
          </div>
          {/* Ratings breakdown */}
          <div className="mb-6">
            {[5, 4, 3, 2, 1].map((star) => (
              <div className="flex items-center gap-2 mb-1" key={star}>
                <span className="w-8 text-right">{star}</span>
                <FaStar className="text-yellow-400" />
                <div className="flex-1 bg-gray-200 rounded h-2 mx-2">
                  <div
                    className="bg-yellow-400 h-2 rounded"
                    style={{
                      width: `${
                        (ratingsCount[star - 1] / dummyReviews.length) * 100 ||
                        0
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="w-8 text-gray-500 text-xs">
                  {ratingsCount[star - 1]}
                </span>
              </div>
            ))}
          </div>
          {/* Reviews */}
          <div className="space-y-6">
            {dummyReviews.map((review, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center font-bold text-yellow-700">
                    {review.name[0]}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{review.name}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                          size={14}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-gray-700">{review.comment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
