const router = require("express").Router();
router.get("/health", (_req, res, _next) => {
  res.status(200).json({ message: "success" });
});
module.exports = router;
