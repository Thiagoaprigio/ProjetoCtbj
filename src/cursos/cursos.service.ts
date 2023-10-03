import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CursosService {

  constructor(private prisma: PrismaService) { }

  create(createCursoDto: CreateCursoDto) {
    return this.prisma.curso.create({ data: createCursoDto });
  }

  findAll() {
    return this.prisma.curso.findMany({
      include: {
        turmas: {
          select: {
            turma: {
              select: {
                nome: true
              }
            }
          }
        }
      }
    });
  }

  getTurmasPorCurso(cursoId: number) {
    return this.prisma.curso.findUnique({
      where: { id: cursoId },
      include: {
        turmas: {
          select: {
            turma: true
          }
        }
      }
    });
  }

  findOne(idCurso: number) {

    return this.prisma.curso.findUnique({
      where: { id: idCurso },
    })
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.prisma.curso.update({
      where: { id: id },
      data: updateCursoDto
    });
  }

  remove(id: number) {
    return this.prisma.curso.delete({
      where: { id: id }
    });
  }
}