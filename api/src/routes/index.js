const { Router } = require("express");
const { dataPlayer, dataBattles } = require("../controllers/index");


const router = Router();

router.use('/dataPlayer', dataPlayer)
router.use('/dataBattles', dataBattles)


module.exports = router;
