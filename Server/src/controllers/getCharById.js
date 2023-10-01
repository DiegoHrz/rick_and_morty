// const axios = require("axios");
// const getCharById = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((res) => res.data)
//     .then((data) => {
//       const obj = {
//         id: data.id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin,
//         image: data.image,
//         status: data.status,
//       };
//       res.writeHead(200, { "Content-type": "application/json" });
//       res.end(JSON.stringify(obj));
//     })
//     .catch((error) => {
//       return res
//         .writeHead(500, { "Content-type": "text/plain" })
//         .end(error.message);
//     });
// };
// module.exports = getCharById;

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";
const getCharById = (req, res) => {
  const { id } = req.params;

  axios.get(URL + id).then(({ data }) => {
    //.then((response)=>{...})
    const { id, status, name, species, origin, image, gender } = data;
    const character = { id, status, name, species, origin, image, gender };
    // const character = {
    //   id: response.data.id,
    //   status: response.data.status,
    //   name: response.data.name,
    //   species: response.data.species,
    //   origin: response.data.origin,
    //   image: ressponse.data.image,
    //   gender: response.data.gender,
    // }
    character.name
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  })
  .catch(error => res.status(500).send(error.message))
};

module.exports = {
  getCharById,
};
