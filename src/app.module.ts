import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { TopPageModule } from './top-page/top-page.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TelegramModule } from './telegram/telegram.module';
import { getTelegramConfig } from './configs/telegram.configs';
import { HhModule } from './hh/hh.module';
import { getMongoConfig } from './configs/mongo.configs';

console.log('>>> RAW ENV MONGO_HOST=', process.env.MONGO_HOST);
console.log('>>> BUILT URI=', 
  `mongodb://${process.env.MONGO_LOGIN }:${process.env.MONGO_PASSWORD}` +
  `@${process.env.MONGO_HOST }:${process.env.MONGO_PORT }/top-api?authSource=` +
  `${process.env.MONGO_AUTHDATABASE }`
);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig
    }),
    AuthModule, 
    ProductModule, 
    ReviewModule, 
    TopPageModule, 
    UsersModule, 
    FilesModule, 
    TelegramModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTelegramConfig
    }), HhModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
function getMongoString(configService: any): any {
  throw new Error('Function not implemented.');
}

