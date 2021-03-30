import { Controller, Get } from '@nestjs/common';
import { IndexService } from './index.service';
@Controller('')
export class IndexController {
  constructor(
      private indexService: IndexService
  ) {}
  
  @Get()
  getHello(): string {
    return this.indexService.validApi();
  }
}
