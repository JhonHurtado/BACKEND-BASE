import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

export const validateLogIn = [
  check("email", "email is required").not().isEmpty().isEmail(),
  check("password", "password is required").not().isEmpty().isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
