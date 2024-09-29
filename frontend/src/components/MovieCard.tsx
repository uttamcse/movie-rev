import React from "react";

interface MovieCardProps {
  name: string;
  releaseDate: string;
  averageRating: number | null;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ name, releaseDate, averageRating, onClick }) => {
  return (
    <div className="bg-purple-200 p-4 rounded-lg cursor-pointer" onClick={onClick}>
      <h3 className="text-lg font-bold">{name}</h3>
      <p>Released: {new Date(releaseDate).toLocaleDateString()}</p>
      <p>Rating: {averageRating ? `${averageRating}/10` : "N/A"}</p>
    </div>
  );
};

export default MovieCard;
