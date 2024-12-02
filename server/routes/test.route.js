import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller";

const router = express.router();

router.get("/should-be-logged-in", shouldBeLoggedIn);
router.get("/should-be-admin", shouldBeAdmin);