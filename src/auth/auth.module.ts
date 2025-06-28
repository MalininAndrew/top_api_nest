import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserModelSchema } from './models/user.model';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJWTConfig } from 'src/configs/jwt.configs';
import { PassportModule } from '@nestjs/passport';
import { JWTStrategy } from './strategies/jwt.strategies';

@Module({
  controllers: [AuthController],
  imports: [
      MongooseModule.forFeature([{name: UserModel.name, schema: UserModelSchema}]),
      ConfigModule,
      JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: getJWTConfig
      }),
      PassportModule
  ],
  providers: [AuthService, JWTStrategy]
})
export class AuthModule {}
