import { Router } from "express";
import { createTag, getTags, getTag, updateTag, deleteTag } from "../controllers/tag.controller.js";

const TagRouter = Router();

TagRouter.post("/user", createTag);
TagRouter.get("/user/:id", getTag);
TagRouter.get("/users", getTags);
TagRouter.put("/user/:id", updateTag);
TagRouter.delete("/user/:id", deleteTag);