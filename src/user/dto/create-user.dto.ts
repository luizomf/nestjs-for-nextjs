import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Nome precisa ser uma string' })
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  name: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsString({ message: 'Senha precisa ser uma string' })
  @IsNotEmpty({ message: 'Senha não pode estar vazio' })
  @MinLength(6, { message: 'Senha não deve ter um mínimo de 6 caracteres' })
  password: string;
}
