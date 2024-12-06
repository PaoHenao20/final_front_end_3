import { Link } from "react-router-dom";
import { useCharStates } from "./utils/global.context";

const Card = ({ char }) => {
  const {
    dispatch,
    state: { favs, theme },
  } = useCharStates();

  const findFav = favs.find((fav) => fav.id === char.id);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
  };

  return (
    <div className={`card ${theme}`}>
      <Link to={`/dentista/${char.id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <p>{char.username}</p>
        <p>{char.name}</p>
        <p>{char.id}</p>
      </Link>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav}>{findFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
