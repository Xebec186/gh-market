import NavTabs from "./NavTabs";

function OrdersTab() {
  return (
    <>
      <NavTabs />
      <div className="p-8 bg-[#FCFBF7] min-h-[400px]">
        <h2 className="text-xl font-bold mb-6">Orders</h2>
        <div className="text-gray-600">
          <p>You have no orders yet.</p>
        </div>
      </div>
    </>
  );
}

export default OrdersTab;
