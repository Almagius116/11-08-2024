const router = require("express").Router();

const authController = require("../controllers/authController");

router.post("/login", authController.login);
// router.get("", shopController.getAllShop);
// router.get("/:id", shopController.getShopById);
// router.patch("/:id", shopController.updateShop);
// router.delete("/:id", shopController.deleteShop);

module.exports = router;