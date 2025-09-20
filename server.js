const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const config = require("./_config");

// Define routes
let index = require("./routes/index");
let image = require("./routes/image");

// Initializing the app
const app = express();

// =================================================
//            DATABASE CONNECTION
// =================================================
// This is the clean connection logic from the 'test' branch
const node_env = process.env.NODE_ENV || "development";
const db_url = config.mongoURI[node_env];

mongoose.connect(
  db_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      // Don't log during tests, it clutters the output
      if (node_env !== "test") {
        console.log(`Database connected successfully to ${db_url}`);
      }
    }
  }
);

// View Engine
app.set("view engine", "ejs");

// Set up the public folder;
app.use(express.static(path.join(__dirname, "public")));

// body parser middleware
app.use(express.json());

app.use("/", index);
app.use("/image", image);

// Start the server (but not when we are testing)
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
}

// =================================================
//      EXPORT THE APP FOR TESTING
// =================================================
// This is the most important line for the tests to work
module.exports = app;
