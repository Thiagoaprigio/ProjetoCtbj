import { Injectable } from '@nestjs/common';
import { CreateProfessoreDto } from './dto/create-professore.dto';
import { UpdateProfessoreDto } from './dto/update-professore.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfessoresService {

  constructor(private prisma: PrismaService) {}

  create(createProfessoreDto: CreateProfessoreDto) {
    return 'This action adds a new professore';
  }

  findAll() {
    return `This action returns all professores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} professore`;
  }

  update(id: number, updateProfessoreDto: UpdateProfessoreDto) {
    return `This action updates a #${id} professore`;
  }

  remove(id: number) {
    return `This action removes a #${id} professore`;
  }
}
