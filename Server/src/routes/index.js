const getCharById = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const login = require("../controllers/login");

const router = require("express");

router.get("/character/:id", (req, res) => {
  res.send();
});
