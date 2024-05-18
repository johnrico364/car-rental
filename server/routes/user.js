const express = require("express");
const Controllers = require("../controllers/userController");

const router = express.Router();

router.post("/signup", Controllers.signupUser);

module.exports = router;
