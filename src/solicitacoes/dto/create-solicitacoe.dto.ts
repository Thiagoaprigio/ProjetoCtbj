import { ApiProperty } from "@nestjs/swagger";

export class CreateSolicitacoeDto {

    @ApiProperty({required: true})
    descricao: string;
    data_hora_entrada: Date;
    data_hora_saida: Date;

    professor_id: number;

    aluno_id: number;
    

}

