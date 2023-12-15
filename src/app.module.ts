import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CicdModule } from './cicd/cicd.module';

@Module({
  imports: [CicdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
