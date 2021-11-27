const express = require("express");
const booksRouter = express.Router();
const axios = require("axios");
booksRouter.get("/home", async (req, res) => {
  try {
    const booksAPI = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e4b356dacb0448a2a29f5402e93710ad`
    );
    res.render("index", { books: booksAPI.data });
    // console.log(booksAPI);
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      console.log(err.request);
    } else console.log("error", err.message);
  }
});

module.exports = booksRouter;
