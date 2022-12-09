const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    case "updateTopTrending":
      return { ...state, topTrending: action.payload };
    case "updateUpcoming":
      return { ...state, upComing: action.payload };
    default:
      return state;
  }
};

export default reducer;
