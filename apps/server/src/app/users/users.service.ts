import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@authzn/user/api-interfaces';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  async create(createUserDto: CreateUserDto) {
    let id;
    if (this.users.length) {
      id = +this.users[this.users.length - 1].id + 1;
    } else {
      id = 1;
    }
    const user = { ...createUserDto, id: `${id}` };
    this.users.push(user);
    const { password, ...response } = user;
    return response;
  }

  async findAll() {
    return this.users;
  }

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }

  async findOneBy<K extends keyof User>(key: K | string, value: User[K]) {
    return this.users.find((user) => user[key as keyof User] === value);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const index = this.#findIndex(id);
    const user = this.users[index];
    const newUser = { ...user, ...updateUserDto };
    this.users[index] = newUser;
    const { password, ...response } = newUser;
    return response;
  }

  async remove(id: string) {
    const index = this.#findIndex(id);
    this.users.splice(index, 1);
  }

  #findIndex(id: string) {
    return this.users.findIndex((u) => u.id === id);
  }
}
