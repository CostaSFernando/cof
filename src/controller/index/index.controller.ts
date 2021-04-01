import { Body, Controller, Get, Post } from '@nestjs/common';
import { IOutgoingMoney } from 'src/model/ICashout.model';
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

  @Get('cashout')
  getOutgoingMoney() {
    return this.indexService.getOutgoingMoney();
  }

  @Post('cashout')
  createCashOut(@Body() cashOut: IOutgoingMoney) {
    return this.indexService.createCashOut(cashOut);
  }
}
