import { Module } from '@nestjs/common';
import { CursosTurmasService } from './cursos_turmas.service';
import { CursosTurmasController } from './cursos_turmas.controller';

@Module({
  controllers: [CursosTurmasController],
  providers: [CursosTurmasService],
})
export class CursosTurmasModule {}
