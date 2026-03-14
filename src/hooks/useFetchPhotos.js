import { useEffect, useState } from "react";

const API_URL = "https://picsum.photos/v2/list?limit=30";

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        console.error(err);
        setError("Failed to get photos");
      } finally {
        setLoading(false);
      }
    };
    loadPhotos();
  }, []);
  return { photos, loading, error };
}
