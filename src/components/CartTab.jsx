import NavTabs from "./NavTabs";

function CartTab() {
  return (
    <>
      <NavTabs />
      <div className="bg-[#FCFBF7] min-h-[400px]">
        <h2 className="text-xl font-bold mb-6">Your Cart</h2>
        <p className="text-gray-600">
          This is where your cart items will be displayed.
        </p>
      </div>
    </>
  );
}

export default CartTab;
