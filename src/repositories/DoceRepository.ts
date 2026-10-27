import { prisma } from "./prisma"
import { IDoce } from "../interfaces/IDoce"
import { IDoceRepository } from "../interfaces/IDoceRepository"


export class DoceRepository implements IDoceRepository{
    async listar(): Promise<IDoce[]> {
        return await prisma.doce.findMany();
    }
    async editar(idDoce: number, dados: Partial<IDoce>): Promise<IDoce> {
        return await prisma.doce.update({
            where: { id: idDoce},
            data: {
                nome: dados.nome,
                preco: dados.preco,
                quantidade: dados.quantidade,
                sabor: dados.sabor
            }
        })
    }

    excluir(idDoce: number): void {
        prisma.doce.delete({
            where: { id: idDoce }
        })
    }
    
    async criar(dados: IDoce){
        return await prisma.doce.create({
            data: {
                nome: dados.nome,
                preco: dados.preco,
                quantidade: dados.quantidade,
                sabor: dados.sabor
            }
        })
    }
}