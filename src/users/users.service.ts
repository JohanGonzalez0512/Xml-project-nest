import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    await this.usersRepository.save(user);

    return user;
  }

  async findAll(response: any) {
    const users = await this.usersRepository.find();
    return response.send(
      `<?xml version="1.0" encoding="UTF-8"?>
      <users>
        ${users.map(user => `
          <user>
            <id>${user.id}</id>
            <name>${user.name}</name> 
            <email>${user.email}</email>
          </user>
        `).join('')}
      </users>`
    );
  }

  
}
