import { RecipeModule } from './receita/recipe.module';
import { HealthService } from './health/health.service';
import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Padrao:BatatasFelizes@cluster0.stqpc.mongodb.net/Project00?retryWrites=true&w=majority'),
    RecipeModule
  ],
  controllers: [
    HealthController
  ],
  providers: [
    HealthService
  ]
})
export class AppModule { }
