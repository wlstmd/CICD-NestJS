import { Module } from '@nestjs/common';
import { CicdController } from './cicd.controller';
import { CicdService } from './cicd.service';

@Module({
  controllers: [CicdController],
  providers: [CicdService],
})
export class CicdModule {}
