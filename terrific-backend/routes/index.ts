let express = require("express");
let router = express.Router();

let choresController = require("../controllers/chores.controller");

router.get("/chores", choresController.get_chores);
router.post("/chore", choresController.add_chore);
router.put("/chore", choresController.update_chore);
router.delete("/chore/:id", choresController.delete_chore);

module.exports = router;