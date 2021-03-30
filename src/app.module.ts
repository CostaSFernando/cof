import { Module } from '@nestjs/common';
import { IndexController } from './controller/index/index.controller';
import { IndexService } from './controller/index/index.service';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [IndexService],
})
export class AppModule {}
