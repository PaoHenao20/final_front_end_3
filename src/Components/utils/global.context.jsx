import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../Reducers/Reducers";

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  favs: lsFavs,
  chars: [],
  theme: "light",
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_CHARS", payload: res.data });
    });
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        state,
        dispatch,
        toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useCharStates = () => useContext(ContextGlobal);
