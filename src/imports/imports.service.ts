import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Import } from './entities/import.entity';


@Injectable()
export class ImportsService {

  constructor(
    @InjectRepository(Import)
    private importsRepository: Repository<Import>,
  ) {}


  async findAll(response: any) {
    const imports = await this.importsRepository.find();
    return response.send(
      `<?xml version="1.0" encoding="UTF-8"?>
      <imports>
        ${imports.map(imports => `
          <import>
            <id>${imports.id}</id>
            <month>${imports.month}</month>
            <year>${imports.year}</year>
            <total>${imports.total}</total>
            <consumerGoods>${imports.consumerGoods}</consumerGoods>
            <intermediateGoods>${imports.intermediateGoods}</intermediateGoods>
            <capitalGoods>${imports.capitalGoods}</capitalGoods>
          </import>
        `).join('')}
            
      </imports>`
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} import`;
  }


  remove(id: number) {
    return `This action removes a #${id} import`;
  }
}
