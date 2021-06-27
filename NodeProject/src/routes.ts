import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/EnsureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
const router = Router();

const createUserController = new CreateUserController();
const createTagConstroller = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();


router.post("/usersPost", createUserController.handle)
router.post("/tagsPost", ensureAdmin, createTagConstroller.handlle)
router.post("/authenticate", authenticateUserController.handler)

export { router }