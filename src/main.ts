import './configure-env';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(process.env.PORT || 3000).then(server => {
    console.log(`listening port ${process.env.PORT || 3000}. `)
  }).catch( e => {console.log('error', e)});
}
bootstrap();
