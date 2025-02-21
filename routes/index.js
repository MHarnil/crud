const express = require('express');
const router = express.Router();
const authRouter = require("../controllers/user");

router.use('/user',authRouter)

module.exports = router;