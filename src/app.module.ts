import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [AuthModule, UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
