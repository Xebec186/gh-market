import NavTabs from "./NavTabs";

function WishlistTab() {
  return (
    <>
      <NavTabs />
      <div className="p-8">
        <h2 className="text-xl font-bold mb-6">Wishlist</h2>
        <p>Your wishlist is currently empty.</p>
      </div>
    </>
  );
}

export default WishlistTab;
