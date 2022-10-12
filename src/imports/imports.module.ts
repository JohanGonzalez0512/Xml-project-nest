import { Module } from '@nestjs/common';
import { ImportsService } from './imports.service';
import { ImportsController } from './imports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Import } from './entities/import.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Import]),
  ],
  controllers: [ImportsController],
  providers: [ImportsService]
})
export class ImportsModule {}
