const { Router } = require('express');
const { dataPlayer } = require('../controllers');


const router = Router();

router.get('/dataPlayer', async (req, res, next) => {
    const { name } = req.query;

    if (name) {
        try {
            const dataSearchPlayer = await dataPlayer(name);
            console.log(dataSearchPlayer)
            dataSearchPlayer ? res.status(200).send(dataSearchPlayer) : res.status(400).send('No hay un jugador con ese nombre');
        } catch (err) {
            next(err);
        }
    }
});

module.exports = router;