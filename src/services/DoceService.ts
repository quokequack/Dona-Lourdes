import { IDoce } from "../interfaces/IDoce";
import { IDoceRepository } from "../interfaces/IDoceRepository";

export class DoceService {
    constructor(private readonly doceRepository: IDoceRepository){}

    async criar(dados: IDoce){
        
        if(dados.quantidade <= 0){
            throw new Error('Doce precisa ter mais de uma quantidade!');
        }

        return await this.doceRepository.criar(dados);
    }

    async listar(){
        return await this.doceRepository.listar();
    }
}