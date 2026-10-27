import {Router} from "express";
import {DoceController} from "../controllers/DoceController.js";

export class DocesRoutes {
    private router: Router;

    constructor(private readonly doceController: DoceController) {
        this.router = Router();
        this.configurarRotas();
    }

    private configurarRotas() : void {
        this.router.get('/', this.doceController.criar);
        this.router.post('/', this.doceController.listar);
    }

    public getRouter() : Router {
        return this.router;
    }
}