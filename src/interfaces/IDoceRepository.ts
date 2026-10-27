import { IDoce } from "./IDoce";

export interface IDoceRepository {
    criar(dados: IDoce) : Promise<IDoce>
    listar() : Promise<IDoce[]>
    editar(idDoce: number, dados: IDoce) : Promise<IDoce>
    excluir(idDoce: number): void;
}