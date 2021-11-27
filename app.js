const express = require("express");
const dotenv = require("dotenv");
const booksRouter = require("./src/routes/books");

dotenv.config({ path: "./config/config.env" });

const app = express();

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
// templte engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// routes
app.use("", booksRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
