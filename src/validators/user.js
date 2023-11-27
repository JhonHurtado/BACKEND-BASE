import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

export const validateUser = [
  check("name", "Name is required").not().isEmpty().isString(),
  check("lastName", "lastName is required").not().isEmpty().isString(),
  check("dateBirth", "dateBirth is required").not().isEmpty(),
  check("course", "course is required").not().isEmpty().isNumeric(),
  check("program", "program is required").not().isEmpty().isString(),
  check("numberDocument", "numberDocument is required")
    .not()
    .isEmpty()
    .isNumeric(),
  check("typeDocument", "typeDocument is required").not().isEmpty().isString(),
  check("email", "Email is required").isEmail(),
  check("password", "Password is required").not().isEmpty().isString(),
  (req, res, next) => {
    validateResult(req,res,next)
  },
];
