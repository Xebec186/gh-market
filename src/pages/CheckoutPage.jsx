import { useState } from "react";

// Dummy cart items
const cartItems = [
  {
    name: "Handwoven Kente Cloth",
    img: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    quantity: 2,
  },
  {
    name: "Shea Butter Lotion",
    img: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    quantity: 1,
  },
];

function CheckoutPage() {
  const [discount, setDiscount] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("home");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [address, setAddress] = useState({
    street: "",
    city: "",
    region: "",
    postal: "",
  });

  // Dummy summary values
  const subtotal = 55;
  const discountValue = 5;
  const deliveryFee = 10;
  const total = subtotal - discountValue + deliveryFee;

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <div className="max-w-3xl mx-auto pt-24 pb-12 px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <span className="hover:underline cursor-pointer">Shopping Cart</span>{" "}
          / <span className="text-black">Checkout</span>
        </div>
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        {/* Items in Cart */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Items in Cart</h2>
          <ul>
            {cartItems.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 mb-2">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-gray-500 text-sm">
                    Quantity: {item.quantity}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 mt-3">
            <input
              type="text"
              placeholder="Discount Code"
              className="border rounded px-3 py-2 flex-1"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
            <button className="bg-gray-100 px-4 py-2 rounded font-medium border hover:bg-gray-200 transition">
              Apply
            </button>
          </div>
        </div>

        {/* Delivery Method */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Delivery Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label
              className={`flex items-start gap-3 border rounded-lg px-4 py-3 cursor-pointer ${
                deliveryMethod === "home"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="delivery"
                value="home"
                checked={deliveryMethod === "home"}
                onChange={() => setDeliveryMethod("home")}
                className="accent-yellow-400 mt-1"
              />
              <div>
                <div className="font-medium">Home Delivery</div>
                <div className="text-gray-500 text-sm">
                  Delivery to your address
                </div>
              </div>
            </label>
            <label
              className={`flex items-start gap-3 border rounded-lg px-4 py-3 cursor-pointer ${
                deliveryMethod === "pickup"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="delivery"
                value="pickup"
                checked={deliveryMethod === "pickup"}
                onChange={() => setDeliveryMethod("pickup")}
                className="accent-yellow-400 mt-1"
              />
              <div>
                <div className="font-medium">Pickup</div>
                <div className="text-gray-500 text-sm">
                  Pickup from a designated location
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Payment Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label
              className={`flex items-start gap-3 border rounded-lg px-4 py-3 cursor-pointer ${
                paymentMethod === "cash"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
                className="accent-yellow-400 mt-1"
              />
              <div>
                <div className="font-medium">Cash</div>
                <div className="text-gray-500 text-sm">
                  Pay with cash on delivery
                </div>
              </div>
            </label>
            <label
              className={`flex items-start gap-3 border rounded-lg px-4 py-3 cursor-pointer ${
                paymentMethod === "mobile"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="mobile"
                checked={paymentMethod === "mobile"}
                onChange={() => setPaymentMethod("mobile")}
                className="accent-yellow-400 mt-1"
              />
              <div>
                <div className="font-medium">Mobile Money</div>
                <div className="text-gray-500 text-sm">
                  Pay with Mobile Money
                </div>
              </div>
            </label>
            <label
              className={`flex items-start gap-3 border rounded-lg px-4 py-3 cursor-pointer ${
                paymentMethod === "card"
                  ? "border-yellow-400 bg-yellow-50"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="accent-yellow-400 mt-1"
              />
              <div>
                <div className="font-medium">Card</div>
                <div className="text-gray-500 text-sm">
                  Pay with Credit/Debit Card
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Delivery Address */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Delivery Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Street Address"
              className="border rounded px-3 py-2"
              value={address.street}
              onChange={(e) =>
                setAddress({ ...address, street: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded px-3 py-2"
              value={address.city}
              onChange={(e) => setAddress({ ...address, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="Region"
              className="border rounded px-3 py-2"
              value={address.region}
              onChange={(e) =>
                setAddress({ ...address, region: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="border rounded px-3 py-2"
              value={address.postal}
              onChange={(e) =>
                setAddress({ ...address, postal: e.target.value })
              }
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="mb-8">
          <h2 className="font-semibold mb-2">Order Summary</h2>
          <div className="flex flex-col gap-1 text-sm max-w-xs ml-auto">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>-${discountValue.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-base mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded transition text-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
