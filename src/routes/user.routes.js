import { createUser, getUsers, getUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/user", createUser);
UserRouter.get("/user/:id", getUser);
UserRouter.get("/users", getUsers);
UserRouter.put("/user/:id", updateUser);
UserRouter.delete("/user/:id", deleteUser);