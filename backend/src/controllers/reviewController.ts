import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const addReview = async (req: Request, res: Response) => {
  try {
    const { movieId, reviewer, rating, comments } = req.body;
    const review = await prisma.review.create({
      data: { movieId, reviewer, rating, comments },
    });
    
    // Recalculate average rating
    const reviews = await prisma.review.findMany({ where: { movieId } });
    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    await prisma.movie.update({ where: { id: movieId }, data: { averageRating } });
    
    res.json(review);
  } catch (err) {
    res.status(500).json({ error: "Error adding review" });
  }
};
