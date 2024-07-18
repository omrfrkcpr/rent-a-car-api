"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | RENT_A_CAR API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/car:

// URL: /cars

const car = require("../controllers.car");

const permissions = require("../middleware.permissions");

module.exports = router;
