import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    return this.accessToken(user);
  }

  async signUp(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  async deleteAccount(id: string) {
    return this.usersService.remove(id);
  }

  async accessToken({ id, username, firstName, lastName }: User) {
    return {
      accessToken: await this.jwtService.signAsync({
        sub: id,
        username,
        firstName,
        lastName,
      }),
    };
  }
}
