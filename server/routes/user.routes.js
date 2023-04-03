import express from "express";
import { body } from "express-validator";
import { userRegister, userSignIn } from "../controllers/user.controller.js";
import {tokenAuth} from "../middlewares/token.middleware.js";
import { validate } from "../utils/validator.js";

const router = express.Router();

//userRegister
router.post(
  "/signup",
  body("username")
    .exists()
    .withMessage("username is requires")
    .isLength({ min: 6 })
    .withMessage("username must be atleast 6 characters")
    .isLength({ max: 15 })
    .withMessage("username must have maximum of 15 characters"),
  body("password")
    .exists()
    .withMessage("password is requires")
    .isLength({ min: 8 })
    .withMessage("password must be atleast 8 characters"),
  validate,
  userRegister
);

//userSignIn
router.post(
  "/signin",
  body("username")
    .exists()
    .withMessage("username is requires")
    .isLength({ min: 6 })
    .withMessage("username must be atleast 6 characters")
    .isLength({ max: 15 })
    .withMessage("username must have maximum of 15 characters"),
  body("password")
    .exists()
    .withMessage("password is requires")
    .isLength({ min: 8 })
    .withMessage("password must be atleast 8 characters"),
  validate,
  userSignIn
);

//check-token
router.get("/check-token", tokenAuth, (req, res) =>
  res.status(200).json({
    username: req.user.username,
  })
);

export default router;
