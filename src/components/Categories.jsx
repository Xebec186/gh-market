import CardListItem from "./CardListItem";
import craftImg from "../assets/crafts.png";
import foodImg from "../assets/food.png";
import fashionImg from "../assets/fashion.png";
import homeImg from "../assets/home.png";

function Categories() {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4 text-left">Categories</h2>
      <ul className="flex gap-4 md:gap-8 overflow-x-auto">
        <CardListItem imgSrc={foodImg} text="Food" to="/products/food" />
        <CardListItem
          imgSrc={fashionImg}
          text="Fashion"
          to="/products/fashion"
        />
        <CardListItem imgSrc={craftImg} text="Crafts" to="/products/crafts" />
        <CardListItem imgSrc={homeImg} text="Home" to="/products/home" />
      </ul>
    </div>
  );
}

export default Categories;
