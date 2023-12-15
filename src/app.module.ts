import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CicdModule } from './cicd/cicd.module';
import { QwerModule } from './qwer/qwer.module';

@Module({
  imports: [CicdModule, QwerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
