import { Injectable } from '@nestjs/common';

@Injectable()
export class QwerService {
  getHello(): string {
    return 'Hello QWER Test입니다.';
  }
}
