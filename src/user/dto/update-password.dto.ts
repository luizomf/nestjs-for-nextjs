import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePasswordDto {
  @IsString({ message: 'Senha precisa ser uma string' })
  @IsNotEmpty({ message: 'Senha não pode estar vazia' })
  currentPassword: string;

  @IsString({ message: 'Nova senha precisa ser uma string' })
  @IsNotEmpty({ message: 'Nova senha não pode estar vazia' })
  @MinLength(6, {
    message: 'Nova senha deve ter um mínimo de 6 caracteres',
  })
  newPassword: string;
}
