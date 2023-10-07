import { Injectable } from '@nestjs/common';
import { CreateSolicitacoeDto } from './dto/create-solicitacoe.dto';
import { UpdateSolicitacoeDto } from './dto/update-solicitacoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SolicitacoesService {
  constructor(private prisma: PrismaService) {}

  create(createSolicitacoeDto: CreateSolicitacoeDto) {
    return 'This action adds a new solicitacoe';
  }

  findAll() {
    return `This action returns all solicitacoes`;
  }
  TodasDescricao() {
    return this.prisma.solicitacao.findMany({
          select: {
            descricao: true,
          
        
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitacoe`;
  }

  update(id: number, updateSolicitacoeDto: UpdateSolicitacoeDto) {
    return `This action updates a #${id} solicitacoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitacoe`;
  }
}
