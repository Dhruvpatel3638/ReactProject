import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json("This is a Post");
});

export default router;
