const { Router } = require('express');
const { dataPlayer } = require('../controllers');


const router = Router();

router.get('/', async (req, res, next) => {
    const { name } = req.query;

    if(name) { 
        try { 

            const dataBasic = await dataPlayer(name)
            dataBasic ? res.status(200).send(dataBasic.slice(0,15)) : res.status(400).send('No hay un jugador con ese nombre')

        } catch(err) {
            next(err)
        }
    }
}
)

module.exports = router;