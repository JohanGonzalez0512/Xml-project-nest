import { Controller, Get, Query } from '@nestjs/common';
import { DeathsService } from './deaths.service';
import { PaginationDto } from '../common/dtos/pagination.dtos';


@Controller('deaths')
export class DeathsController {
  constructor(private readonly deathsService: DeathsService) { }


  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.deathsService.findAll(paginationDto);
  }

}
