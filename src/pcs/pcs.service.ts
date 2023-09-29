import { Injectable } from '@nestjs/common';
import { CreatePcDto } from './dto/create-pc.dto';
import { UpdatePcDto } from './dto/update-pc.dto';

@Injectable()
export class PcsService {
  create(createPcDto: CreatePcDto) {
    return 'This action adds a new pc';
  }

  findAll() {
    return `This action returns all pcs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pc`;
  }

  update(id: number, updatePcDto: UpdatePcDto) {
    return `This action updates a #${id} pc`;
  }

  remove(id: number) {
    return `This action removes a #${id} pc`;
  }
}
