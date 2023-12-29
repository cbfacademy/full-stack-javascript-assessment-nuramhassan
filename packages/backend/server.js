const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

require("dotenv").config();

const app = express();

// connect to db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));
// app middlewares
//app.use(bodyParser.json());

app.use(fileUpload());
app.use(bodyParser.json({ limit: "50mb" }));
//app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors()); // allows all origins

// routes attached with server

app.use("/api", require("./routes/productReview"));

const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// const express = require("express");
// const helmet = require("helmet");
// const cors = require("cors");
// const { MongoClient, ServerApiVersion } = require("mongodb");

// require("dotenv").config();
// const app = express();

// app.use(helmet());
// app.use(cors());
// app.use(express.json());

// const uri = process.env.MONGO_URI; // Add your connection string from Atlas to your .env file. See https://docs.atlas.mongodb.com/getting-started/
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// client.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MongoDB", err);
//     return;
//   }
//   console.log("Connected to MongoDB");
//   client.close();
// });

// app.get("/", (req, res) => {
//   res.send("Hello from the CBF Academy backend!");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });
