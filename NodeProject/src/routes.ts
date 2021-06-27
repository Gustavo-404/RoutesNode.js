import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
const router = Router();

const createUserController = new CreateUserController();
const createTagConstroller = new CreateTagController();


router.post("/usersPost", createUserController.handle)
router.post("/tagsPost", ensureAdmin, createTagConstroller.handlle)

export { router }