import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  doLogin(loginDto: LoginDto) {
    console.log(loginDto.email, loginDto.password);
    return loginDto;
  }
}
