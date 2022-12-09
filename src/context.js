import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import API from "./Api";

const initialState = {
  loading: false,
  topTrending: [],
  upComing: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "loading", payload: true });
    API.get(`trending/anime?limit=8&offset=0`).then((res) => {
      dispatch({ type: "updateTopTrending", payload: res.data.data });
    });
    API.get(
      "anime?filter[status]=upcoming?filter[status]=upcoming&page[limit]=8&page[offset]=0"
    ).then((res) => {
      dispatch({ type: "updateUpcoming", payload: res.data.data });
    });
    dispatch({ type: "loading", payload: false });
  }, []);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalContext };
