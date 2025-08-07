import { useState } from "react";

function SellerRegistrationForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    sellerName: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <form className="space-y-4 p-6" onSubmit={handleSubmit}>
      <div>
        <label className="block font-medium mb-1" htmlFor="fullName">
          Full Name
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          className="w-full border rounded px-3 py-2"
          value={form.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="w-full border rounded px-3 py-2"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="w-full border rounded px-3 py-2"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          className="w-full border rounded px-3 py-2"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="sellerName">
          Seller Name
        </label>
        <input
          id="sellerName"
          name="sellerName"
          type="text"
          placeholder="Enter your seller name"
          className="w-full border rounded px-3 py-2"
          value={form.sellerName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block font-medium mb-1" htmlFor="location">
          Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Enter your location"
          className="w-full border rounded px-3 py-2"
          value={form.location}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
      >
        Register
      </button>
    </form>
  );
}

export default SellerRegistrationForm;
