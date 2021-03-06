const mongoose = require("mongoose")
const config = require("config")
//const db = config.get("mongoURI")
const db;

const connectDB = async () => {
  try {
    //returns promise to connect to the database with two params mongoURI and mongoose obj *check website for changes
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log("mongoDB connected....")
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
