import { HealthService } from './health/health.service';
import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';

@Module({
  imports: [],
  controllers: [
    HealthController],
  providers: [
    HealthService]
})
export class AppModule { }
