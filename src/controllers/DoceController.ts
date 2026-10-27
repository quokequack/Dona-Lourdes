import { DoceService } from "../services/DoceService";
import { Response, Request } from "express";

export class DoceController {
    constructor(private readonly doceService: DoceService){}

    criar = async (req: Request, res: Response) => {
         try {
            const doce = await this.doceService.criar(req.body)
            res.status(201).json(doce);
        } catch (error){
            res.status(500).send('Erro');
        }
    }


    listar = async (res: Response) => {
        try {
            const doces = await this.doceService.listar();
            res.status(200).json(doces);
        } catch (error){
            res.status(500).json({message: 'Erro'});
        }
    }
}