import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/tp2ej1";

mongoose.connect(url);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("BD conectada");
});

