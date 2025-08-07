import { Link } from "react-router-dom";

function CardListItem({ imgSrc, text, to }) {
  return (
    <li>
      <Link to={to}>
        <div>
          <img src={imgSrc} alt={text} className="rounded" />
          <p className="mt-2 text-lg font-medium text-left">{text}</p>
        </div>
      </Link>
    </li>
  );
}

export default CardListItem;
