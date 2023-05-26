import { CreateUser } from '@authzn/user/api-interfaces';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto implements CreateUser {
  @IsNotEmpty({ message: 'Primeiro nome obrigatório' })
  firstName: string;

  @IsNotEmpty({ message: 'Último nome obrigatório' })
  lastName: string;

  @IsNotEmpty({ message: 'Usuário obrigatório' })
  username: string;

  @IsNotEmpty({ message: 'Senha obrigatória' })
  password: string;
}
