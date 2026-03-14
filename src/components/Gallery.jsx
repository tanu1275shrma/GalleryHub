import { useReducer, useState, useMemo, useCallback } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { favouritesReducer, initialState } from "../reducers/favouritesReducer";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";

function Gallery() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [state, dispatch] = useReducer(favouritesReducer, initialState);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  const toggleFavourite = (photo) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photo,
    });
  };

  if (loading) {
    return <p className="text-center mt-10">Loading photos...</p>;
  }

  if (error) {
    return <p className="text-center mt-10">{error}</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <SearchBar search={search} onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredPhotos.map((photo) => {
          const isFavourite = state.favourites.some(
            (item) => item.id === photo.id,
          );

          return (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={isFavourite}
              toggleFavourite={toggleFavourite}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
