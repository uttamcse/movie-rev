import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

interface Movie {
  id: number;
  name: string;
  releaseDate: string;
  averageRating: number | null;
}

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies").then((response) => {
      setMovies(response.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">The best movie reviews site!</h1>
      <div className="grid grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            name={movie.name}
            releaseDate={movie.releaseDate}
            averageRating={movie.averageRating}
            onClick={() => {
              /* Navigate to Movie Page */
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
