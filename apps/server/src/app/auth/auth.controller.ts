import {
  Get,
  Body,
  Post,
  Delete,
  Request,
  HttpCode,
  Controller,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto';
import { AuthGuard } from './auth.guard';
import { Public } from '../shared';

type AuthRequest = Request & { user: Record<string, string> };

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() { username, password }: Record<string, string>) {
    return this.authService.signIn(username, password);
  }

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.OK)
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: AuthRequest) {
    return req.user;
  }

  @UseGuards(AuthGuard)
  @Delete('account')
  deleteAccount(@Request() req: AuthRequest) {
    return this.authService.deleteAccount(req.user.id);
  }
}
