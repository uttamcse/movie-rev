import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getMovies = async (req: Request, res: Response) => {
  try {
    const movies = await prisma.movie.findMany();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: "Error fetching movies" });
  }
};

export const addMovie = async (req: Request, res: Response) => {
  try {
    const { name, releaseDate } = req.body;
    const movie = await prisma.movie.create({
      data: { name, releaseDate: new Date(releaseDate) },
    });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: "Error adding movie" });
  }
};
