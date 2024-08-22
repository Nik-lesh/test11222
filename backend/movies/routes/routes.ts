import express from "express";
import asyncHandler from "./middleware/asyncHandler";
import MovieReview from "../model/movieSchema";
const route = express.Router();

route.get(
  "/movie/:movie_id",
  asyncHandler(async (req, res) => {
    const movieReviews = await MovieReview.find({
      movie_id: req.params.movie_id,
    });

    if (movieReviews.length === 0) {
      return res
        .status(404)
        .json({ message: "No reviews found for this movie" });
    }

    res.json(movieReviews);
    console.log(movieReviews);
  })
);

export default route;
