import { Module } from '@nestjs/common';
import { HhService } from './hh.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
	providers: [HhService],
	imports: [ConfigModule, HttpModule]
})
export class HhModule {}
