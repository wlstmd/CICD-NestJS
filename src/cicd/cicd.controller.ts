import { Controller, Get } from '@nestjs/common';
import { CicdService } from './cicd.service';

@Controller('cicd')
export class CicdController {
  constructor(private readonly cicdService: CicdService) {}

  @Get()
  getHello(): string {
    return this.cicdService.getHello();
  }
}
