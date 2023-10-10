import { Injectable } from '@nestjs/common';
import { CreateSolicitacoeDto } from './dto/create-solicitacoe.dto';
import { UpdateSolicitacoeDto } from './dto/update-solicitacoe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Solicitacoe } from './entities/Solicitacoe.entity';

@Injectable()
export class SolicitacoesService {
  constructor(private prisma: PrismaService) {}

  create(createSolocitacoeDto: CreateSolicitacoeDto) {
      return this.prisma.solicitacao.create({data: {
        descricao: createSolocitacoeDto.descricao,
        data_hora_entrada: createSolocitacoeDto.data_hora_entrada,
        data_hora_saida: createSolocitacoeDto.data_hora_saida,
        professor: {
          connect: {
            id: createSolocitacoeDto.professor_id
          }
        },
        aluno: {
          connect: {
            id: createSolocitacoeDto.aluno_id
          }
        },

      } });
  }

  findAll() {
    return this.prisma.solicitacao.findMany({});
  }
  todasDescricao() {
    return this.prisma.solicitacao.findMany({
      select: {
        descricao: true,
      },
    });
  }
  Situacao() {
    return this.prisma.solicitacao.findMany({
      select: {
        status: true,
      },
    });
  }
  TodasDatas() {
    return this.prisma.solicitacao.findMany({
      select: {
        data_hora_entrada: true,
        data_hora_saida: true,
      },
    });
  }
  

  findOne(id: number) {
    return this.prisma.solicitacao.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updateSolicitacoeDto: UpdateSolicitacoeDto) {
    return this.prisma.solicitacao.update({
      where: { id: id },
      data: updateSolicitacoeDto,
    });
  }

  remove(id: number) {
    return this.prisma.solicitacao.delete({
      where: { id: id },
    });
  }
}
