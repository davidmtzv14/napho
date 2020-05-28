import { createParamDecorator ,ExecutionContext} from '@nestjs/common'
import { UserEntity } from '../../users/data/user.entity';

export const GetUser = createParamDecorator((data, req): UserEntity => {
  return req.user;
});

