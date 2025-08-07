import { useState } from "react";

import kenteImg from "../assets/registration-kente.png";
import BuyerRegistrationForm from "../components/BuyerRegistrationForm";
import SellerRegistrationForm from "../components/SellerRegistrationForm";

function RegistrationPage() {
  const [activeTab, setActiveTab] = useState("buyer");

  return (
    <div>
      <div className="mt-12">
        <img
          src={kenteImg}
          alt="Kente Design"
          className="w-full h-50 object-cover rounded-lg"
        />
        <div className="flex mt-6">
          <button
            className={`px-6 py-2 font-semibold rounded-t-lg border-b-2 ${
              activeTab === "buyer"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            } transition`}
            onClick={() => setActiveTab("buyer")}
          >
            Buyer
          </button>
          <button
            className={`px-6 py-2 font-semibold rounded-t-lg border-b-2 ${
              activeTab === "seller"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500"
            } transition`}
            onClick={() => setActiveTab("seller")}
          >
            Seller
          </button>
        </div>
        <div className="max-w-xl">
          {activeTab === "buyer" ? (
            <BuyerRegistrationForm />
          ) : (
            <SellerRegistrationForm />
          )}
        </div>
        <p>{/* Already have an account? <Link to="/login">Log in</Link> */}</p>
      </div>
    </div>
  );
}

export default RegistrationPage;
