import { Link } from "react-router-dom";

function CardListItem({ imgSrc, text, to }) {
  return (
    <li>
      <Link to={to}>
        <div>
          <img
            src={imgSrc}
            alt={text}
            className="rounded object-cover md:w-48 md:h-48"
          />
          <p className="mt-2 text-sm md:text-lg font-medium text-left">
            {text}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default CardListItem;
