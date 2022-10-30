import { useNavigate } from "react-router";
import { CardStructure } from "./Home.styled";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <CardStructure>
      <div>
        <h3>{item.recipe.label}</h3>
      </div>
      <img src={item.recipe.image} alt={item.recipe.label} />
      <button onClick={() => navigate(`/details`, { state: item })}>
        View More
      </button>
    </CardStructure>
  );
};

export default Card;
