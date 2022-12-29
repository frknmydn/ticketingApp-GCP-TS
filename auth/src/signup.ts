import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "./errors/request-validation-error";
import { DatabaseConnectionError } from "./errors/database-connection-errors";


const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 25 })
      .withMessage("password must be between 4 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array())
    }
    const { email, password } = req.body;

    console.log("creating user");
    throw new DatabaseConnectionError();


    //new user with email and password

    res.send({});
  }
);

export { router as signupRouter };
