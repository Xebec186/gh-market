import kenteImg from "../assets/kente.png";
import Categories from "../components/Categories";
import ProductsNearYou from "../components/ProductsNearYou";

function Homepage() {
  return (
    <div>
      <div className="mt-12 flex flex-col items-center">
        <div className="relative w-full flex flex-col items-center">
          {/* Overlayed text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none p-3">
            <p className="text-3xl md:text-6xl font-bold text-white drop-shadow mb-2 text-center">
              Discover Local Treasures
            </p>
            <p className="text-lg md:text-xl text-white drop-shadow text-center">
              Shop directly from Ghanaian artisans and sellers. Find unique
              products and support local businesses
            </p>
          </div>
          {/* Image */}
          <img
            src={kenteImg}
            alt="Kente"
            className="w-full h-95 object-cover rounded-xl brightness-60"
          />
        </div>
      </div>

      <Categories />
      <ProductsNearYou />
    </div>
  );
}

export default Homepage;
