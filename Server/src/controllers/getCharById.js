const axios = require("axios");
const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.data)
    .then((data) => {
      const obj = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(obj));
    })
    .catch((error) => {
      return res
        .writeHead(500, { "Content-type": "text/plain" })
        .end(error.message);
    });
};
module.exports = getCharById;
