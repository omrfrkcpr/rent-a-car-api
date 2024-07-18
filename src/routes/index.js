"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | RENT_A_CAR API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// ROUTER INDEX:

// URL: /

// auth:
router.use("/auth", require("./auth"));
// users:
router.use("/users", require("./user"));
// users:
router.use("/cars", require("./car"));
// reservations:
router.use("/reservations", require("./reservation"));
// document:
router.use("/documents", require("./documents"));

/* ------------------------------------------------------- */
module.exports = router;
