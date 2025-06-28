import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app.module';
import { CreateReviewDto } from 'src/review/dto/create-review.dto';
import { disconnect, Types } from 'mongoose';
import { AuthDto } from 'src/auth/dto/auth.dto';

const productId = new Types.ObjectId().toHexString();

const loginDto: AuthDto = {
    login: 'malininandrew@yandex.ru',
	  password: '12'
}

const testDto: CreateReviewDto = {
    name: 'Test',
    title: 'Заголовок',
    description: 'ТЕстовое описание',
    rating: 5,
    productId 
}

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  let createdID: string;
  let token: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    const { body } = await request(app.getHttpServer())
      .post('/auth/login')
      .send(loginDto);
    token = body.access_token;
  });

  it('/review/create (POST) - success', async () => {
    return request(app.getHttpServer())
      .post('/review/create')
      .send(testDto)
      .expect(201)
      .then(({ body }: request.Response) => {
          createdID = body._id;
          expect(createdID).toBeDefined();
      })
  });

  afterAll(() => {
    disconnect();
  });
});
