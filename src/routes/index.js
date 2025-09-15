import { Router } from "express";

import { userRouter } from "./user.routes.js"; 
import { tagRouter } from "./tag.routes.js";
import { profileRouter } from "./profile.routes.js";
import { articleRouter } from "./article.routes.js";

export const routes = Router();

routes.use(userRouter); 
routes.use(tagRouter); 
routes.use(profileRouter); 
routes.use(articleRouter); 