import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(dto: CreateUserDto): Promise<User> {
    const user = new User();
    user.id = dto.id;
    user.email = dto.email;
    user.location = dto.location;
    user.profilePic = dto.profilePic;
    return this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  async update(id: string, dto: UpdateUserDto): Promise<UpdateResult> {
    const user = await this.findOne(id);
    user.location = dto.location;
    user.profilePic = dto.profilePic;
    return await this.usersRepository.update(id, user);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.usersRepository.delete(id);
  }
}
