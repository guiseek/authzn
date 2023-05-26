import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UpdateUser } from '@authzn/user/api-interfaces';

export class UpdateUserDto
  extends PartialType(CreateUserDto)
  implements UpdateUser {}
