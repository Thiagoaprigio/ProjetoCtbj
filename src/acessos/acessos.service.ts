import { Injectable } from '@nestjs/common';
import { CreateAcessoDto } from './dto/create-acesso.dto';
import { UpdateAcessoDto } from './dto/update-acesso.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AcessosService {

  constructor(private prisma: PrismaService) {}

  create(createAcessoDto: CreateAcessoDto) {
    return this.prisma.acesso.create({data: {
     descricao: createAcessoDto.descricao,
     data_hora_entrada: createAcessoDto.data_hora_entrada,
     data_hora_saida: createAcessoDto.data_hora_saida,
     aluno: {
      connect: {
        id: createAcessoDto.aluno_id
      }
    },
    solicitacao: {
      connect: {
        id: createAcessoDto.solicitacao_id
      }
    },
    }
    });
  }

  findAll() {
    return this.prisma.acesso.findMany({});
  }

  findOne(id: number) {
    return this.prisma.acesso.findUnique({
      where: { id: id}
    });
  }

  update(id: number, updateAcessoDto: UpdateAcessoDto) {
    return this.prisma.acesso.update({
      where: {id: id},
      data: updateAcessoDto
    });
  }

  remove(id: number) {
    return this.prisma.acesso.delete({
      where: {id: id}
    })
  }
}
