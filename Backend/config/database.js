import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017")
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
