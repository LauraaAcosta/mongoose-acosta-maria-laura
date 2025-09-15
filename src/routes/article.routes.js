import { Router } from "express";
import { getArticles, updateArticle, deleteArticle, createArticle, getArticle } from "../controllers/article.controller.js";

const ArticlesRouter = Router();

ArticlesRouter.post("/user", createArticle);
ArticlesRouter.get("/user/:id", getArticle);
ArticlesRouter.get("/users", getArticles);
ArticlesRouter.put("/user/:id", updateArticle);
ArticlesRouter.delete("/user/:id", deleteArticle);