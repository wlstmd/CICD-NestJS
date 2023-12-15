import { Injectable } from '@nestjs/common';

@Injectable()
export class CicdService {
  getHello(): string {
    return 'CICD Test!!';
  }
}
