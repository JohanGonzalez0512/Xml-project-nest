import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Death } from './entities/death.entity';
import { PaginationDto } from '../common/dtos/pagination.dtos';

@Injectable()
export class DeathsService {
 
  constructor(
    @InjectRepository(Death)
    private deathsRepository: Repository<Death>,
  ) {}

  findAll( paginationDto:PaginationDto) {
  

    const { limit = 10, offset = 0 } = paginationDto;

    return this.deathsRepository.find({
      take: limit,
      skip: offset,
      where: [
        { indicator: 'Suicides registered' },
        { indicator: 'General deaths' },
        { indicator: 'Deaths from external causes' },
      ]
    });
  }

  
}
