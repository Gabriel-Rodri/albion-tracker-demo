const { Router } = require("express");
const { dataPlayer, dataBattles } = require("../controllers/index");
const searchNames = require('../handlers/searchNames.js')


const router = Router();

router.use('/dataPlayer', searchNames)
router.use('/dataBattles', dataBattles)


module.exports = router;
