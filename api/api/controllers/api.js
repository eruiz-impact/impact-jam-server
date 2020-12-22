'use strict';
const axios = require('axios');

module.exports = {
    find: async ctx => {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=00&limit=150");
        ctx.send(res.data);
    }
};
