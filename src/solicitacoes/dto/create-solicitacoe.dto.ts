import { ApiProperty } from "@nestjs/swagger";
export class CreateSolicitacoeDto {
    @ApiProperty({required: true}) 
    descricao : string;
    
   
}
