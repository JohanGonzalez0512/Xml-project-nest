import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return this.appService.getHello();


  }

  @Get('xml')
  xmlResponse(@Response() res) {
    res.set('Content-Type', 'text/xml');
    res.send(
      `<?xml version="1.0" encoding="UTF-8"?>
      <note>

      <to>Tove</to>

      <from>Jani</from>

      <heading>Reminder</heading>

      <body>Don't forget me this weekend!</body>  

      </note>`
    );
  }
}
