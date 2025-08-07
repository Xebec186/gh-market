import { FiUser, FiCreditCard, FiMapPin, FiLogOut } from "react-icons/fi";
import NavTabs from "./NavTabs";

function ProfileTab() {
  return (
    <>
      <NavTabs />
      <div className="bg-[#FCFBF7] min-h-[400px]">
        <div className="flex items-center gap-4 mb-8">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Emmanuel Mensah"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-lg">Emmanuel Mensah</div>
            <div className="text-[#B6A97C] text-sm">
              emmanuel.mensah@email.com
            </div>
          </div>
        </div>
        <ul className="space-y-3">
          <li>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#F5F3EA] w-full text-left transition">
              <FiUser className="text-xl text-[#B6A97C]" />
              <span className="font-medium">Edit Profile</span>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#F5F3EA] w-full text-left transition">
              <FiCreditCard className="text-xl text-[#B6A97C]" />
              <span className="font-medium">Payment Methods</span>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#F5F3EA] w-full text-left transition">
              <FiMapPin className="text-xl text-[#B6A97C]" />
              <span className="font-medium">Shipping Addresses</span>
            </button>
          </li>
          <li>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#F5F3EA] w-full text-left transition">
              <FiLogOut className="text-xl text-[#B6A97C]" />
              <span className="font-medium">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProfileTab;
