import { Module } from '@nestjs/common';
import { DeathsService } from './deaths.service';
import { DeathsController } from './deaths.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Death } from './entities/death.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Death])
  ],
  controllers: [DeathsController],
  providers: [DeathsService]
})
export class DeathsModule {}
