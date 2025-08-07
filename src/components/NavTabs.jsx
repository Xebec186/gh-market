import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="mt-22 md:mt-15 flex gap-4 border-b border-b-gray-300 mb-8 max-w-lg text-lg">
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/orders">Orders</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
      <li>
        <NavLink to="/wishlist">Wishlist</NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
