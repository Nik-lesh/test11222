import mongoose from "mongoose";
import sampleData from "./data/sampleData";
import dotenv from "dotenv";
import MovieReview from "./model/movieSchema";
import connectDB from "./db/databaseConnect";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    const createMovieReview = await MovieReview.insertMany(sampleData);
    console.log(
      `Successfully imported ${createMovieReview.length} movie reviews.`
    );
    process.exit(0);
  } catch (error) {
    console.error("Error importing data", error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await MovieReview.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "destory") {
  destroyData();
} else {
  importData();
}
importData();
