import { useEffect, useState } from "react";

const PLANETS_URL = "https://dragonball-api.com/api/planets";

const usePlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPlanets = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(PLANETS_URL);
      const jsonData = await response.json();

      setPlanets(jsonData.items ?? []);
    } catch (err) {
      console.error("Error fetching planets:", err);
      setError("No se pudieron cargar los planetas.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return { planets, loading, error };
};

export default usePlanets;
