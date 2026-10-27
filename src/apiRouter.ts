import {Router} from "express";
import { DoceRepository } from "./repositories/DoceRepository";
import { DoceService } from "./services/DoceService";
import { DoceController } from "./controllers/DoceController";
import { DocesRoutes } from "./routes/DoceRouter";

export class ApiRouter {
    private router: Router;

    constructor() {
        this.router = Router();
        const repository = new DoceRepository();
        const service = new DoceService(repository);
        const controller = new DoceController(service);
        const routes = new DocesRoutes(controller);

        this.router.use('/doces', routes.getRouter());
    }

    getRouter() : Router{
        return this.router;
    }

}