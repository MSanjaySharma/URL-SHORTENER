const express = require("express");
const router = express.Router();
const urlsController = require("../app/controllers/urlsController");

router.get("/urls", urlsController.list);
router.post("/urls", urlsController.create);
router.get("/urls/:id", urlsController.show);
router.put("/urls/:id", urlsController.update);
router.delete("/urls/:id", urlsController.destory);
router.get("/:hash", urlsController.redirect);
module.exports = router;
