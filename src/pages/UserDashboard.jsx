import { useState } from "react";
import Navbar from "../components/Navbar";

// Dummy components for each tab
function ProfileTab() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Profile</h2>
      <p className="text-gray-700">User profile information goes here.</p>
    </div>
  );
}
function CartTab() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Cart</h2>
      <p className="text-gray-700">Your cart items will be shown here.</p>
    </div>
  );
}
function OrdersTab() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Orders</h2>
      <p className="text-gray-700">Your order history will be shown here.</p>
    </div>
  );
}
function WishlistTab() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">Wishlist</h2>
      <p className="text-gray-700">Your wishlist items will be shown here.</p>
    </div>
  );
}

const tabs = [
  { label: "Profile", component: <ProfileTab /> },
  { label: "Cart", component: <CartTab /> },
  { label: "Orders", component: <OrdersTab /> },
  { label: "Wishlist", component: <WishlistTab /> },
];

function UserDashboard() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto pt-28 px-4">
        {/* Tabs */}
        <div className="flex border-b mb-6">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={`px-6 py-3 font-semibold focus:outline-none transition border-b-2 ${
                activeTab === idx
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-blue-600"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow">
          {tabs[activeTab].component}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
