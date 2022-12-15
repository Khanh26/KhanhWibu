import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import API from "./Api";

const initialState = {
  loading: false,
  topTrending: [],
  upComing: [],
  scrollbutton: false,
  anime: [],
  popularityRank: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // call default data
  const GetTopTrending = (limit = 8, offset = 0) => {
    useEffect(() => {
      API.get(`trending/anime?limit=${limit}&offset=${offset}`).then((res) => {
        dispatch({ type: "updateTopTrending", payload: res.data.data });
      });
    }, [limit, offset]);
  };

  const GetUpcoming = (limit = 8, offset = 0) => {
    useEffect(() => {
      API.get(
        `anime?filter[status]=upcoming&page[limit]=${limit}&page[offset]=${offset}`
      ).then((res) => {
        dispatch({ type: "updateUpcoming", payload: res.data.data });
      });
    }, [limit, offset]);
  };

  const GetPopularityRank = (limit = 8, offset = 0) => {
    useEffect(() => {
      API.get(
        `anime?sort=popularityRank&page[limit]=${limit}&page[offset]=${offset}`
      ).then((res) => {
        dispatch({ type: "popularityRank", payload: res.data.data });
      });
    }, [limit, offset]);
  };

  //  Scroll to top
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 300) {
        dispatch({ type: "scrollButton", payload: true });
      } else {
        dispatch({ type: "scrollButton", payload: false });
      }
    });
  });

  const GetAnimeById = (id) => {
    useEffect(() => {
      API.get(`anime/${id}`).then((res) => {
        dispatch({ type: "anime", payload: res.data.data });
      });
    }, [id]);
  };

  const value = {
    ...state,
    GetTopTrending,
    GetUpcoming,
    GetAnimeById,
    GetPopularityRank,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalContext };
