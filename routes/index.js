const express = require("express");
const router = new express.Router();
const AWS = require("aws-sdk");
const s3 = new AWS.S3()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    status: "success",
    content: "text",
  });
});

router.post("/", async (req, res) => {
  const {number} = req.body;
  res.json({
    status: "success",
    newFavouriteNumber: number,
  });
});

module.exports = router;
