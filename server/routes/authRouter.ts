import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

import authController from "../controllers/authController";

const router = express.Router();

router.post("/signup", (req: Request, res: Response, next: NextFunction) => {});

router.post("/login", (req: Request, res: Response, next: NextFunction) => {});

router.post("/logout", (req: Request, res: Response, next: NextFunction) => {});

export default router;
