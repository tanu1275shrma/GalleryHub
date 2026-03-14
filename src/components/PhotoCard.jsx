function PhotoCard({ photo, isFavourite, toggleFavourite }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={photo.author}
        className="w-full h-52 object-cover "
      />

      <div className="flex items-center justify-between p-3">
        <p className="text-sm font-medium">{photo.author}</p>

        <button onClick={() => toggleFavourite(photo)} className="text-lg">
          {isFavourite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
