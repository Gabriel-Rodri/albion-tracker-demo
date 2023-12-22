const { Router } = require("express");
const { dataPlayer, dataBattles } = require("../controllers/index");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dataPlayer', dataPlayer)
router.use('/dataBattles', dataBattles)







module.exports = router;
