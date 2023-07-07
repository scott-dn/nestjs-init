import { Module } from '@nestjs/common';

import { AppModule } from './app/app.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [AppModule, CatModule]
})
export class RootModule {}
