import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    movie_id: {
      type: Number,
      required: true,
    },
    user_id: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    video: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const MovieReview = mongoose.model("Movie_review", MovieSchema);

export default MovieReview;
