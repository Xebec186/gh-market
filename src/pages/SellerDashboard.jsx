import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  FiBox,
  FiHome,
  FiBarChart2,
  FiSettings,
  FiClipboard,
} from "react-icons/fi";
import products from "../data/products.json";

// Dummy seller info
const seller = {
  name: "Akua Mensah",
  role: "Seller",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
};

const sidebarLinks = [
  { label: "Dashboard", icon: <FiHome />, active: false },
  { label: "Products", icon: <FiBox />, active: true },
  { label: "Orders", icon: <FiClipboard />, active: false },
  { label: "Analytics", icon: <FiBarChart2 />, active: false },
  { label: "Settings", icon: <FiSettings />, active: false },
];

// Dummy product data for table
const sellerProducts = [
  {
    img: products[0].img,
    name: products[0].name,
    price: "GHC 50",
    location: "Accra",
    status: "In Stock",
  },
  {
    img: products[1].img,
    name: products[1].name,
    price: "GHC 30",
    location: "Kumasi",
    status: "Out of Stock",
  },
  {
    img: products[2].img,
    name: products[2].name,
    price: "GHC 20",
    location: "Tamale",
    status: "In Stock",
  },
  {
    img: products[3].img,
    name: products[3].name,
    price: "GHC 45",
    location: "Cape Coast",
    status: "In Stock",
  },
  {
    img: products[4].img,
    name: products[4].name,
    price: "GHC 15",
    location: "Ho",
    status: "In Stock",
  },
];

function SellerDashboard() {
  const [search, setSearch] = useState("");

  const filteredProducts = sellerProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#F5F3EA] min-h-screen flex items-start justify-center">
      <div className="w-full max-w-7xl mx-auto flex gap-8 py-8 px-4">
        {/* Sidebar */}
        <aside className="bg-white rounded-2xl shadow w-64 flex flex-col py-8 px-6 min-h-[80vh]">
          <div className="flex flex-col items-center mb-10">
            <img
              src={seller.avatar}
              alt={seller.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <div className="font-semibold">{seller.name}</div>
            <div className="text-yellow-700 text-sm">{seller.role}</div>
          </div>
          <nav className="flex-1">
            <ul className="space-y-2">
              {sidebarLinks.map((link) => (
                <li key={link.label}>
                  <button
                    className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-left font-medium ${
                      link.active
                        ? "bg-[#F5F3EA] text-black"
                        : "hover:bg-[#F5F3EA] text-gray-600"
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white rounded-2xl shadow p-8 min-h-[80vh]">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Products</h1>
            <button className="bg-[#F5F3EA] text-gray-700 px-5 py-2 rounded-lg font-medium shadow hover:bg-yellow-100 transition">
              Add Product
            </button>
          </div>
          {/* Search Bar */}
          <div className="flex items-center bg-[#F5F3EA] rounded-lg px-4 py-2 mb-6 max-w-md">
            <CiSearch className="text-xl text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search products"
              className="bg-transparent outline-none flex-1 text-gray-700"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* Products Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left rounded-xl">
              <thead>
                <tr className="text-[#B6A97C] font-semibold text-sm">
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Location</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((p, idx) => (
                  <tr
                    key={idx}
                    className="border-b last:border-b-0 hover:bg-[#F5F3EA] transition"
                  >
                    <td className="py-3 px-4 flex items-center gap-3">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span>{p.name}</span>
                    </td>
                    <td className="py-3 px-4">{p.price}</td>
                    <td className="py-3 px-4">{p.location}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                          p.status === "In Stock"
                            ? "bg-[#F5F3EA] text-[#B6A97C]"
                            : "bg-[#F5F3EA] text-red-400"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#B6A97C] font-medium space-x-2">
                      <button className="hover:underline">Edit</button>
                      <span>|</span>
                      <button className="hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredProducts.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                No products found.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default SellerDashboard;
