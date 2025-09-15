import { Router } from "express";

import { getProfiles, updateProfile, deleteProfile, createProfile, getProfile } from "../controllers/profile.controller.js";

const ProfileRouter = Router();

ProfileRouter.post("/profile", createProfile);
ProfileRouter.get("/profile/:id", getProfile);
ProfileRouter.get("/profiles", getProfiles);
ProfileRouter.put("/profile/:id", updateProfile);
ProfileRouter.delete("/profile/:id", deleteProfile);