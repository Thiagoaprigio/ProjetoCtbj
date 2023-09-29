import { Module } from '@nestjs/common';
import { PcsService } from './pcs.service';
import { PcsController } from './pcs.controller';

@Module({
  controllers: [PcsController],
  providers: [PcsService],
})
export class PcsModule {}
