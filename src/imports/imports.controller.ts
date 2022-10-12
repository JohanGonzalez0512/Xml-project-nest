import { Controller, Get, Post, Body, Patch, Param, Delete, Response } from '@nestjs/common';
import { ImportsService } from './imports.service';


@Controller('imports')
export class ImportsController {
  constructor(private readonly importsService: ImportsService) {}


  @Get()
  findAllXML(@Response() res) {
    res.set('Content-Type', 'text/xml');
    return this.importsService.findAll(res);

      
  }

 

  
}
