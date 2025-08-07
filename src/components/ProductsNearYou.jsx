import CardListItem from "./CardListItem";
import handwovenkenteImg from "../assets/handwovenkente.png";
import sandalsImg from "../assets/sandals.png";
import wallartImg from "../assets/wallart.png";
import sheabutterImg from "../assets/sheabutter.png";

function ProductsNearYou() {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4 text-left">Products Near You</h2>
      <ul className="flex gap-4  md:gap-8 overflow-x-auto">
        <CardListItem text="Handwoven Kente Cloth" imgSrc={handwovenkenteImg} />
        <CardListItem text="Leather Sandals" imgSrc={sandalsImg} />
        <CardListItem text="Wall Art" imgSrc={wallartImg} />
        <CardListItem text="Body Lotion" imgSrc={sheabutterImg} />
      </ul>
    </div>
  );
}

export default ProductsNearYou;
