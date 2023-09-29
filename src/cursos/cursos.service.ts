import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CursosService {

  constructor(private prisma: PrismaService) {}

  create(createCursoDto: CreateCursoDto) {
    return this.prisma.curso.create({data: createCursoDto});
  }

  findAll() {
    return this.prisma.curso.findMany();
  }

  findOne(idCurso: number) {
    return this.prisma.curso.findUnique({
      where: {id: idCurso}
    });
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return `This action updates a #${id} curso`;
  }

  remove(id: number) {
    return this.prisma.curso.delete({
      where: {id: id}
    });
  }
}
