const express = require("express");

const path = require("path");

const rootdir = require("../util/path");

const router = express.Router();

router.get("/exp-1", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "exp1.html"));
});

router.get("/exp-2", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "exp2.html"));
});

router.get("/exp-3", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "exp3.html"));
});

router.get("/exp-4", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "exp4.html"));
});

router.get("/exp-5", (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "exp5.html"));
});


module.exports = router;