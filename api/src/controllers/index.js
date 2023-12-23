const { default: axios } = require('axios');

const dataPlayer = async (name) => {
    let url = `https://gameinfo.albiononline.com/api/gameinfo/search?q=${name}`;
    try {
        const respuesta = await axios.get(url)
        const jugadoresExistentes = respuesta.data.players.filter(
            jugador => jugador.Avatar && jugador.AvatarRing
        );
        console.log(jugadoresExistentes)
        return jugadoresExistentes;
    } catch (e) {
        console.log(e)
    }
};

const dataBattles = async () => {
    let url = `https://gameinfo.albiononline.com/api/gameinfo/battles`
    const battles = await axios.get(url)
    console.log(battles.data);
    return battles.data
}

// const dataGuilds = async () => {
//     let url = `https://gameinfo.albiononline.com/api/gameinfo/guilds`
//     let guilds  = await axios.get(url)
//     console.log(guilds);
//     return guilds
// }

module.exports = {

    dataPlayer,
    dataBattles,
}



