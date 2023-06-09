const Router = require("express");
const router = new Router();
const controller = require("./authController");

router.post("/registration", controller.registration);
router.post("/login", controller.login);
router.post("/delete", controller.delete);
router.post("/block", controller.block);
router.get("/users", controller.getUsers);

module.exports = router;
