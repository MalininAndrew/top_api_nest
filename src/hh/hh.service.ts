/*
https://docs.nestjs.com/providers#services
*/

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HhService {
	constructor(
		private readonly configService: ConfigService,
		private readonly httpService: HttpService
	) {

	}

	async getData(text: string) {
		
	}
}
