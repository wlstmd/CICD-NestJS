import { Module } from '@nestjs/common';
import { QwerController } from './qwer.controller';
import { QwerService } from './qwer.service';

@Module({
  controllers: [QwerController],
  providers: [QwerService],
})
export class QwerModule {}
