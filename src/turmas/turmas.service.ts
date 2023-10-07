import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TurmasService {

  constructor(private prisma: PrismaService) {}

  create(createTurmaDto: CreateTurmaDto) {

  }

  findAll() {
    return this.prisma.turma.findMany();
  }

  findOne(id: number) {
  }
  
  update(id: number, updateTurmaDto: UpdateTurmaDto) {
    return `This action updates a #${id} turma`;
  }

  remove(id: number) {
    return `This action removes a #${id} turma`;
  }
}
