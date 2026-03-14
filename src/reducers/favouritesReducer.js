export const initialState = {
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
};

export function favouritesReducer(state, action) {
  switch (action.type) {
    case "OGGLE_FAVOURITET": {
      const exists = state.favourites.find(
        (item) => item.id === action.payload.id,
      );

      let updatedFavourites;

      if (exists) {
        updatedFavourites = state.favourites.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        updatedFavourites = [...state.favourites, action.payload];
      }

      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

      return {
        ...state,
        favourites: updatedFavourites,
      };
    }

    default:
      return state;
  }
}
