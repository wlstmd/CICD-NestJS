import { Controller, Get } from '@nestjs/common';
import { QwerService } from './qwer.service';

@Controller('qwer')
export class QwerController {
  constructor(private readonly qwerService: QwerService) {}

  @Get()
  getHello(): string {
    return this.qwerService.getHello();
  }
}
