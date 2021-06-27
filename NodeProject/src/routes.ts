import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
const router = Router();

const createUserController = new CreateUserController();
const createTagConstroller = new CreateTagController();


router.post("/usersPost", createUserController.handle)
router.post("/tagsPost", createTagConstroller.handlle)

export { router }