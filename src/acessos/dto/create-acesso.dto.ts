import { ApiProperty } from "@nestjs/swagger";

export class CreateAcessoDto {

    
    descricao: string;
    data_hora_entrada: Date;
    data_hora_saida: Date;
    aluno_id: number;
    solicitacao_id: number;


}