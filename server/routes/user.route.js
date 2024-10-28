import express from 'express';

const router = express.Router();

router.get("/register", (req, res) => {
    console.log("this is new")
})

export default router;