import { Injectable } from '@nestjs/common';
import { CreateObjetoDto } from './dto/create-objeto.dto';
import { UpdateObjetoDto } from './dto/update-objeto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ObjetosService {

  constructor(private prisma: PrismaService) {}

  create(createObjetoDto: CreateObjetoDto) {
    return 'This action adds a new objeto';
  }

  findAll() {
    return `This action returns all objetos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} objeto`;
  }

  update(id: number, updateObjetoDto: UpdateObjetoDto) {
    return `This action updates a #${id} objeto`;
  }

  remove(id: number) {
    return `This action removes a #${id} objeto`;
  }
}
